import {
  LayoutDashboard,
  ShoppingBag,
  Boxes,
  Truck,
  Calculator,
  Building2,
  TrendingUp,
  TrendingDown,
  Search,
  Bell,
} from "lucide-react";

const NAV = [
  { label: "Tableau de bord", icon: LayoutDashboard, active: true },
  { label: "Commandes", icon: ShoppingBag },
  { label: "Inventaire", icon: Boxes },
  { label: "Fournisseurs", icon: Truck },
  { label: "Comptabilité", icon: Calculator },
  { label: "Succursales", icon: Building2 },
];

const KPIS = [
  { label: "Commandes aujourd'hui", value: "142", trend: "+8 %", up: true },
  { label: "Chiffre d'affaires", value: "8 540 $", trend: "+12 %", up: true },
  { label: "Produits en stock", value: "1 248", trend: "-3 %", up: false },
  { label: "Fournisseurs actifs", value: "24", trend: "+2", up: true },
];

const ACTIVITY = [
  { label: "Nouvelle commande", detail: "#4821 · Maison Burger", amount: "+42,50 $", tag: "Commande", color: "text-emerald-400" },
  { label: "Achat fournisseur", detail: "Boucherie Lévis", amount: "-310,00 $", tag: "Achat", color: "text-amber-400" },
  { label: "Ajustement inventaire", detail: "Pain burger · -24 u.", amount: "—", tag: "Stock", color: "text-sky-400" },
  { label: "Mise à jour comptable", detail: "Rapprochement TPS", amount: "✓", tag: "Compta", color: "text-violet-400" },
];

const BARS = [52, 68, 44, 80, 61, 90, 73];

/**
 * Always-dark SaaS dashboard mockup shown inside the ContainerScroll card.
 * Self-contained dark palette (neutral-*) so it reads as a dark app on the
 * light marketing site; brand accent uses the `primary` token.
 */
export function DashboardMockup() {
  return (
    <div className="flex h-full w-full bg-neutral-950 text-neutral-100">
      {/* Sidebar */}
      <aside className="hidden w-44 shrink-0 flex-col border-r border-neutral-800 bg-neutral-900/60 p-4 sm:flex lg:w-52">
        <div className="flex items-center gap-2 px-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            S
          </div>
          <span className="text-sm font-semibold">SmartResto</span>
        </div>
        <nav className="mt-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium ${
                item.active
                  ? "bg-primary/15 text-primary"
                  : "text-neutral-400"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 sm:px-5">
          <div>
            <h3 className="text-sm font-semibold">Tableau de bord</h3>
            <p className="text-[11px] text-neutral-500">Vue consolidée · 3 succursales</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-[11px] text-neutral-500 md:flex">
              <Search className="h-3.5 w-3.5" />
              Rechercher…
            </div>
            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
              <Bell className="h-3.5 w-3.5 text-neutral-400" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary/60 to-primary/20" />
          </div>
        </header>

        <div className="flex-1 space-y-4 overflow-hidden p-4 sm:p-5">
          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-3"
              >
                <p className="truncate text-[11px] text-neutral-400">{kpi.label}</p>
                <p className="mt-1.5 text-lg font-bold tracking-tight">{kpi.value}</p>
                <p
                  className={`mt-1 inline-flex items-center gap-1 text-[11px] ${
                    kpi.up ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {kpi.up ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {kpi.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid gap-3 lg:grid-cols-3">
            {/* Bar chart */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium">Ventes par jour</p>
                <span className="text-[11px] text-neutral-500">7 derniers jours</span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2 sm:h-28">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Donut placeholder */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
              <p className="text-xs font-medium">Répartition</p>
              <div className="mt-3 flex items-center justify-center">
                <div
                  className="h-20 w-20 rounded-full sm:h-24 sm:w-24"
                  style={{
                    background:
                      "conic-gradient(var(--color-primary) 0% 55%, oklch(0.7 0.19 41 / 0.4) 55% 80%, rgb(38 38 38) 80% 100%)",
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-neutral-900 sm:h-12 sm:w-12" />
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-[11px] text-neutral-400">
                <p className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Sur place
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary/40" /> Livraison
                </p>
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5">
              <p className="text-xs font-medium">Activité récente</p>
              <span className="text-[11px] text-primary">Tout voir</span>
            </div>
            <div className="divide-y divide-neutral-800">
              {ACTIVITY.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-4 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`shrink-0 rounded-md bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium ${row.color}`}
                    >
                      {row.tag}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium">{row.label}</p>
                      <p className="truncate text-[11px] text-neutral-500">{row.detail}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-neutral-300">
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
