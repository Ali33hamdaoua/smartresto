import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Erreur 404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Désolé, la page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Retour à l’accueil</Link>
      </Button>
    </main>
  );
}
