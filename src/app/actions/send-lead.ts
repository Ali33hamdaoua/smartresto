"use server";

import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const FROM_NAME = "SmartResto — Site web";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const name = String(formData.get("name") ?? "").trim();
  const restaurant = String(formData.get("restaurant") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const variant = String(formData.get("variant") ?? "contact");

  // Basic validation
  if (!name || !restaurant || !email) {
    return { status: "error", message: "Veuillez remplir les champs requis." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Adresse courriel invalide." };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? siteConfig.email;

  if (!host || !user || !pass) {
    console.error("SMTP non configuré (SMTP_HOST / SMTP_USER / SMTP_PASS).");
    return {
      status: "error",
      message: "Le service d'envoi n'est pas configuré. Réessayez plus tard.",
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // SSL pour Namecheap Private Email
    auth: { user, pass },
  });

  const subjectKind = variant === "demo" ? "Demande de démo" : "Message de contact";
  const lines = [
    `Type : ${subjectKind}`,
    `Nom : ${name}`,
    `Restaurant : ${restaurant}`,
    `Courriel : ${email}`,
    phone ? `Téléphone : ${phone}` : null,
    "",
    message || "(aucun message)",
  ].filter(Boolean) as string[];

  try {
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[${subjectKind}] ${restaurant}`,
      text: lines.join("\n"),
      html: `
        <h2 style="margin:0 0 12px">${escapeHtml(subjectKind)}</h2>
        <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Nom</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Restaurant</strong></td><td>${escapeHtml(restaurant)}</td></tr>
          <tr><td><strong>Courriel</strong></td><td>${escapeHtml(email)}</td></tr>
          ${phone ? `<tr><td><strong>Téléphone</strong></td><td>${escapeHtml(phone)}</td></tr>` : ""}
        </table>
        ${message ? `<p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>` : ""}
      `,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Échec de l'envoi du courriel :", error);
    return {
      status: "error",
      message: "L'envoi a échoué. Veuillez réessayer ou nous écrire directement.",
    };
  }
}
