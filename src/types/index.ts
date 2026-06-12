import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  externalUrl: string;
  icon: LucideIcon;
  features: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface NavSubItem {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface NavSubMenu {
  title: string;
  items: NavSubItem[];
}

export interface NavMenuItem {
  id: number;
  label: string;
  href?: string;
  subMenus?: NavSubMenu[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}
