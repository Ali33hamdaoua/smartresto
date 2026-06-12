"use client";

import {
  ClipboardList,
  Settings,
  Database,
  Palette,
  GraduationCap,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import TimeLine_01, { type TimelineEntry } from "@/components/ui/release-time-line";

const UNSPLASH = "?q=80&w=1200&auto=format&fit=crop";

const ENTRIES: TimelineEntry[] = [
  {
    icon: ClipboardList,
    title: "Analyse de vos besoins",
    subtitle: "Jour 1",
    description:
      "Nous prenons le temps de comprendre votre restaurant, vos menus, vos flux de commandes et vos objectifs avant toute configuration.",
    items: [
      "Audit de votre fonctionnement actuel (salle, à emporter, livraison)",
      "Cartographie de vos menus et catégories de produits",
      "Identification de vos fournisseurs et habitudes d'achat",
      "Définition des accès et des rôles de votre équipe",
      "Objectifs de mise en production et indicateurs de succès",
    ],
    image: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4${UNSPLASH}`,
  },
  {
    icon: Settings,
    title: "Configuration de la plateforme",
    subtitle: "Jour 2",
    description:
      "Nous paramétrons SmartResto selon vos besoins : commande en ligne, gestion de stock et règles propres à votre établissement.",
    items: [
      "Création de votre espace et de vos succursales",
      "Paramétrage des modes de commande et des zones de livraison",
      "Configuration des taxes, des paiements et des reçus",
      "Mise en place des règles de stock et de réapprovisionnement",
      "Réglage des notifications et des automatisations",
    ],
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${UNSPLASH}`,
  },
  {
    icon: Database,
    title: "Importation des données",
    subtitle: "Jour 3",
    description:
      "Nous importons vos données existantes pour que vous démarriez avec un système déjà rempli et prêt à l'emploi.",
    items: [
      "Import de votre menu complet et de vos prix",
      "Intégration de votre catalogue de produits et d'ingrédients",
      "Reprise de vos fournisseurs et de vos fiches d'achat",
      "Chargement de votre inventaire initial",
      "Vérification de la cohérence des données importées",
    ],
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71${UNSPLASH}`,
  },
  {
    icon: Palette,
    title: "Personnalisation de votre restaurant",
    subtitle: "Jour 4",
    description:
      "Nous adaptons l'apparence et l'expérience à votre image de marque, pour un site de commande qui vous ressemble.",
    items: [
      "Application de votre logo, de vos couleurs et de votre identité visuelle",
      "Mise en page de votre vitrine de commande en ligne",
      "Photos et descriptions de vos plats phares",
      "Configuration des promotions et des menus spéciaux",
      "Personnalisation des messages et des confirmations client",
    ],
    image: `https://images.unsplash.com/photo-1552566626-52f8b828add9${UNSPLASH}`,
  },
  {
    icon: GraduationCap,
    title: "Formation de l'équipe",
    subtitle: "Jour 5",
    description:
      "Nous formons votre personnel pour qu'il maîtrise la plateforme dès le premier service, sans stress.",
    items: [
      "Prise en main de la prise de commande et de la caisse",
      "Gestion quotidienne des stocks et des réceptions",
      "Suivi des commandes en ligne et de la livraison",
      "Lecture des tableaux de bord et des rapports",
      "Bonnes pratiques et résolution des cas fréquents",
    ],
    image: `https://images.unsplash.com/photo-1543269865-cbf427effbad${UNSPLASH}`,
  },
  {
    icon: ClipboardCheck,
    title: "Validation et tests",
    subtitle: "Jour 6",
    description:
      "Nous testons l'ensemble du parcours en conditions réelles pour garantir un lancement sans accroc.",
    items: [
      "Tests de commande de bout en bout, paiement inclus",
      "Vérification des flux multi-succursales",
      "Contrôle des stocks, des alertes et des réapprovisionnements",
      "Validation des accès et des permissions de l'équipe",
      "Derniers ajustements avant la mise en production",
    ],
    image: `https://images.unsplash.com/photo-1559339352-11d035aa65de${UNSPLASH}`,
  },
  {
    icon: Rocket,
    title: "Mise en production",
    subtitle: "Jour 7",
    description:
      "Votre plateforme est lancée. Vous prenez vos premières commandes pendant que nous restons à vos côtés.",
    items: [
      "Activation de votre site de commande en ligne",
      "Accompagnement en direct lors du premier service",
      "Surveillance des performances et corrections rapides",
      "Point de suivi post-lancement",
      "Support continu et évolutions futures",
    ],
    image: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17${UNSPLASH}`,
  },
];

export function DeploymentJourney() {
  return <TimeLine_01 entries={ENTRIES} />;
}
