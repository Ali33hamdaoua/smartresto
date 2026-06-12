import { ShoppingCart, Boxes } from "lucide-react";
import type { NavItem, NavMenuItem } from "@/types";

/** Desktop navigation with an animated dropdown for Solutions. */
export const NAV_MENU: NavMenuItem[] = [
  {
    id: 1,
    label: "Solutions",
    subMenus: [
      {
        title: "Nos solutions",
        items: [
          {
            label: "Commande en ligne",
            description: "Vendez en ligne, sans commission",
            href: "/solutions/commande-en-ligne",
            icon: ShoppingCart,
          },
          {
            label: "Gestion de stock",
            description: "Inventaire, achats et multi-succursales",
            href: "/solutions/gestion-stock",
            icon: Boxes,
          },
        ],
      },
    ],
  },
  { id: 2, label: "Pourquoi SmartResto", href: "/pourquoi-smartresto" },
  { id: 3, label: "Étude de cas", href: "/etude-de-cas" },
  { id: 4, label: "Déploiement", href: "/deploiement" },
];

/** Simple flat list used by the mobile menu. */
export const MAIN_NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Commande en ligne", href: "/solutions/commande-en-ligne" },
      { label: "Gestion de stock", href: "/solutions/gestion-stock" },
    ],
  },
  { label: "Pourquoi SmartResto", href: "/pourquoi-smartresto" },
  { label: "Étude de cas", href: "/etude-de-cas" },
  { label: "Déploiement", href: "/deploiement" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  produit: {
    title: "Produit",
    links: [
      { label: "Commande en ligne", href: "/solutions/commande-en-ligne" },
      { label: "Gestion de stock", href: "/solutions/gestion-stock" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  entreprise: {
    title: "Entreprise",
    links: [
      { label: "Étude de cas", href: "/etude-de-cas" },
      { label: "Contact", href: "/contact" },
      { label: "Demander une démo", href: "/demo" },
    ],
  },
} as const;
