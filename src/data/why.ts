import { Plug, Wallet, LifeBuoy, MapPin } from "lucide-react";
import type { ValueProp } from "@/types";

export const WHY_SMARTRESTO: ValueProp[] = [
  {
    icon: Plug,
    title: "Deux solutions, une vision",
    description:
      "Commande en ligne et gestion des opérations travaillent ensemble, sans outils dispersés.",
  },
  {
    icon: Wallet,
    title: "Sans commission",
    description:
      "Vous gardez vos marges : pas de pourcentage prélevé sur chaque commande.",
  },
  {
    icon: MapPin,
    title: "Pensé pour le Québec",
    description:
      "Conçu et hébergé localement, adapté aux réalités de la restauration d’ici.",
  },
  {
    icon: LifeBuoy,
    title: "Accompagnement réel",
    description:
      "Une équipe qui connaît la restauration vous configure et vous soutient.",
  },
];
