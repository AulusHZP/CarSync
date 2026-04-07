import { Car, Droplet, DollarSign, Gauge, CheckCircle2 } from "lucide-react";

// ─── Design tokens ────────────────────────────────────────────────────────────
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
  dark:      "#1F2937",
  sep:       "rgba(60,60,67,0.08)",
};

const sectionLabel: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: 1.4,
  fontWeight: 500,
  color: T.tertiary,
  textTransform: "uppercase",
};

export function Home() {
  return (
    <div style={{ minHeight: "100%", backgroundColor: T.bg }}>
      <div style={{ padding: "20px 20px 32px" }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 12, color: T.tertiary, letterSpacing: 0.1, marginBottom: 4 }}>
                Wednesday, March 26
              </p>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: T.primary,
                  letterSpacing: -0.6,
                  lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                My Car
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: T.green,
                  }}
                />
                <span style={{ fontSize: 12, fontWeight: 500, color: T.green }}>
                  All systems good
                </span>
              </div>
            </div>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: T.card,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Car style={{ width: 18, height: 18, color: T.primary, strokeWidth: 1.5 }} />
            </div>
          </div>
        </div>

        {/* ── Hero dark card — Health Score ──────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(145deg, #1F2937 0%, #111827 100%)",
            borderRadius: 24,
            padding: "22px 22px 20px",
            marginBottom: 12,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <p style={{ ...sectionLabel, color: "#4B5563", marginBottom: 10 }}>
            Health Score
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 6 }}>
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              92
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#4B5563",
                marginBottom: 6,
              }}
            >
              %
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: T.green }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: T.green, letterSpacing: 0.1 }}>
              Excellent Condition
            </span>
          </div>

          <div
            style={{
              paddingTop: 16,
              borderTop: "0.5px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CheckCircle2
                style={{ width: 16, height: 16, color: T.amber, strokeWidth: 1.6 }}
              />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", marginBottom: 2 }}>
                Next Maintenance
              </div>
              <div style={{ fontSize: 11, color: "#6B7280", letterSpacing: 0.1 }}>
                Oil change due in 12 days
              </div>
            </div>
          </div>
        </div>

        {/* ── Fuel Level ─────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: T.card,
            borderRadius: 18,
            padding: "18px 20px",
            marginBottom: 12,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  backgroundColor: "rgba(59,130,246,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Droplet
                  style={{ width: 16, height: 16, color: T.accent, strokeWidth: 1.6 }}
                />
              </div>
              <span style={{ fontSize: 14, fontWeight: 500, color: T.primary }}>
                Fuel Level
              </span>
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: T.primary,
                letterSpacing: -0.2,
              }}
            >
              68%
            </span>
          </div>
          {/* Progress bar */}
          <div
            style={{
              height: 3,
              backgroundColor: "#E5E5EA",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "68%",
                backgroundColor: T.accent,
                borderRadius: 999,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <span style={{ fontSize: 10, color: T.quarter, letterSpacing: 0.2 }}>Empty</span>
            <span style={{ fontSize: 10, color: T.quarter, letterSpacing: 0.2 }}>Full</span>
          </div>
        </div>

        {/* ── Grid: Monthly + Mileage ─────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          {[
            {
              icon: DollarSign,
              iconColor: "#22C55E",
              iconBg: "rgba(34,197,94,0.08)",
              label: "Monthly",
              value: "$342",
            },
            {
              icon: Gauge,
              iconColor: T.amber,
              iconBg: "rgba(245,158,11,0.08)",
              label: "Mileage",
              value: "24.5k",
            },
          ].map(({ icon: Icon, iconColor, iconBg, label, value }) => (
            <div
              key={label}
              style={{
                backgroundColor: T.card,
                borderRadius: 18,
                padding: "18px 18px 16px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  backgroundColor: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <Icon
                  style={{ width: 16, height: 16, color: iconColor, strokeWidth: 1.6 }}
                />
              </div>
              <p style={{ ...sectionLabel, marginBottom: 4 }}>{label}</p>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: T.primary,
                  letterSpacing: -0.6,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* ── Maintenance Status ──────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: T.card,
            borderRadius: 18,
            padding: "18px 20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T.primary, marginBottom: 3 }}>
                Maintenance Status
              </div>
              <div style={{ fontSize: 12, color: T.secondary, letterSpacing: 0.1 }}>
                All systems operational
              </div>
            </div>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "rgba(34,197,94,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle2
                style={{ width: 18, height: 18, color: T.green, strokeWidth: 1.6 }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
