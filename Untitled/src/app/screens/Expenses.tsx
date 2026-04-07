import { Droplet, Wrench, Shield, TrendingDown } from "lucide-react";

const T = {
  primary:   "#1C1C1E",
  secondary: "#8E8E93",
  tertiary:  "#AEAEB2",
  quarter:   "#C7C7CC",
  accent:    "#3B82F6",
  green:     "#22C55E",
  amber:     "#F59E0B",
  bg:        "#F2F2F7",
  card:      "#FFFFFF",
  sep:       "rgba(60,60,67,0.08)",
};

const sectionLabel: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: 1.4,
  fontWeight: 500,
  color: T.tertiary,
  textTransform: "uppercase",
};

const cardBase: React.CSSProperties = {
  backgroundColor: T.card,
  borderRadius: 18,
  padding: "18px 20px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
};

export function Expenses() {
  const expenses = [
    { id: 1, category: "Fuel",        amount: 156, icon: Droplet, color: T.accent, iconBg: "rgba(59,130,246,0.08)" },
    { id: 2, category: "Maintenance", amount: 120, icon: Wrench,  color: T.amber,  iconBg: "rgba(245,158,11,0.08)" },
    { id: 3, category: "Insurance",   amount: 66,  icon: Shield,  color: T.green,  iconBg: "rgba(34,197,94,0.08)" },
  ];

  const total = expenses.reduce((s, e) => s + e.amount, 0);

  const chartData = [
    { month: "Dec", value: 280 },
    { month: "Jan", value: 320 },
    { month: "Feb", value: 298 },
    { month: "Mar", value: 342, current: true },
  ];
  const chartMax = 380;

  return (
    <div style={{ minHeight: "100%", backgroundColor: T.bg }}>
      <div style={{ padding: "20px 20px 32px" }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: T.tertiary, letterSpacing: 0.1, marginBottom: 4 }}>
            March 2026
          </p>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: T.primary,
              letterSpacing: -0.6,
              lineHeight: 1.15,
            }}
          >
            Expenses
          </h1>
        </div>

        {/* ── Hero dark card — Total ──────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(145deg, #1F2937 0%, #111827 100%)",
            borderRadius: 24,
            padding: "22px 22px 20px",
            marginBottom: 24,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <p style={{ ...sectionLabel, color: "#4B5563", marginBottom: 10 }}>
            Total This Month
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2, marginBottom: 16 }}>
            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "#4B5563",
                marginBottom: 10,
                marginRight: 2,
              }}
            >
              $
            </span>
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              {total}
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "6px 12px",
            }}
          >
            <TrendingDown
              style={{ width: 13, height: 13, color: T.green, strokeWidth: 2 }}
            />
            <span style={{ fontSize: 11, fontWeight: 500, color: T.green, letterSpacing: 0.1 }}>
              12% lower than last month
            </span>
          </div>
        </div>

        {/* ── Section label ──────────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>Breakdown</p>

        {/* ── Expense items ──────────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {expenses.map((expense) => {
            const Icon = expense.icon;
            const pct = ((expense.amount / total) * 100).toFixed(0);
            return (
              <div key={expense.id} style={cardBase}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        backgroundColor: expense.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        style={{ width: 15, height: 15, color: expense.color, strokeWidth: 1.7 }}
                      />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: T.primary }}>
                      {expense.category}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: T.primary,
                        letterSpacing: -0.3,
                      }}
                    >
                      ${expense.amount}
                    </div>
                    <div style={{ fontSize: 10, color: T.quarter, marginTop: 1 }}>
                      {pct}%
                    </div>
                  </div>
                </div>
                {/* Thin progress bar */}
                <div
                  style={{
                    height: 2,
                    backgroundColor: "#E5E5EA",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      backgroundColor: expense.color,
                      borderRadius: 999,
                      opacity: 0.8,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Section label ──────────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>Monthly Trend</p>

        {/* ── Chart ──────────────────────────────────────────────────────── */}
        <div style={cardBase}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              height: 88,
              gap: 10,
              paddingTop: 4,
            }}
          >
            {chartData.map((item, i) => {
              const heightPct = (item.value / chartMax) * 100;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      flex: 1,
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: `${heightPct}%`,
                        backgroundColor: item.current
                          ? T.accent
                          : "rgba(59,130,246,0.1)",
                        borderRadius: 6,
                        transition: "height 0.3s ease",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: item.current ? 600 : 400,
                      color: item.current ? T.accent : T.quarter,
                      letterSpacing: 0.2,
                    }}
                  >
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
