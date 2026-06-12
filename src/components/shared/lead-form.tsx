"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendLead, type LeadState } from "@/app/actions/send-lead";

interface LeadFormProps {
  /** "contact" shows a message field; "demo" focuses on booking a demo. */
  variant?: "contact" | "demo";
}

const initialState: LeadState = { status: "idle" };

export function LeadForm({ variant = "contact" }: LeadFormProps) {
  const t = useTranslations("form");
  const [state, formAction, isPending] = useActionState(sendLead, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="text-lg font-semibold">{t("successTitle")}</h3>
        <p className="text-sm text-muted-foreground">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="variant" value={variant} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t("name")}</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder={t("placeholders.name")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="restaurant">{t("restaurant")}</Label>
          <Input
            id="restaurant"
            name="restaurant"
            required
            placeholder={t("placeholders.restaurant")}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">{t("email")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("placeholders.email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t("placeholders.phone")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {variant === "demo" ? t("needs") : t("message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required={variant === "contact"}
          placeholder={
            variant === "demo"
              ? t("placeholders.messageDemo")
              : t("placeholders.messageContact")
          }
        />
      </div>

      {state.status === "error" && state.message && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isPending}
      >
        {isPending
          ? t("sending")
          : variant === "demo"
            ? t("submitDemo")
            : t("submitContact")}
      </Button>
    </form>
  );
}
