export const siteConfig = {
  name: "SmartResto",
  domain: "smartresto.tech",
  url: "https://smartresto.tech",
  description:
    "SmartResto outille les restaurants : commande en ligne sans commission et gestion complète des stocks, fournisseurs, achats et comptabilité multi-succursales.",
  locale: "fr",
  email: "contact@smartresto.tech",
  solutions: {
    ordering: "https://maisonburger.ca",
    inventory: "https://inventory.maisonburger.ca",
  },
} as const;

export type SiteConfig = typeof siteConfig;
