import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Globe, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/logo";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
} from "@/components/ui/hover-footer";

const socialLinks = [
  { icon: Globe, label: "Site", href: "/" },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  { icon: Send, label: "Contact", href: "/contact" },
];

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("product"),
      links: [
        { label: t("links.onlineOrdering"), href: "/solutions/commande-en-ligne" },
        { label: t("links.inventory"), href: "/solutions/gestion-stock" },
        { label: t("links.pricing"), href: "/tarifs" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("links.caseStudies"), href: "/etude-de-cas" },
        { label: t("contact"), href: "/contact" },
        { label: t("links.requestDemo"), href: "/demo" },
      ],
    },
  ];

  return (
    <footer className="relative m-4 h-fit overflow-hidden rounded-3xl bg-[#0F0F11] text-neutral-300 sm:m-6 lg:m-8">
      <div className="relative z-40 mx-auto max-w-7xl p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" aria-label="SmartResto">
              <Logo className="h-14" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              {t("tagline")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-6 text-lg font-semibold text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              {t("contact")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t("links.requestDemo")} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-neutral-800" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
          <div className="flex space-x-6 text-neutral-500">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-primary"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-center text-neutral-500 md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
        </div>
      </div>

      {/* Animated brand watermark (desktop only) */}
      <div className="-mt-40 -mb-28 hidden h-[24rem] cursor-pointer lg:flex">
        <TextHoverEffect text={siteConfig.name} />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
