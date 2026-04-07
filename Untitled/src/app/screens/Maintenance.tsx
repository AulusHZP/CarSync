import { Calendar, Plus } from "lucide-react";

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
  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
};

export function Maintenance() {
  const items = [
    {
      id: 1,
      title: "Oil Change",
      date: "Completed Mar 12, 2026",
      status: "completed",
      dotColor: T.green,
      badgeColor: T.green,
      badgeBg: "rgba(34,197,94,0.08)",
      badge: "Done",
    },
    {
      id: 2,
      title: "Tire Rotation",
      date: "Due Apr 6, 2026",
      status: "upcoming",
      dotColor: T.amber,
      badgeColor: T.amber,
      badgeBg: "rgba(245,158,11,0.08)",
      badge: "Soon",
    },
    {
      id: 3,
      title: "Brake Inspection",
      date: "Due May 20, 2026",
      status: "scheduled",
      dotColor: T.accent,
      badgeColor: T.accent,
      badgeBg: "rgba(59,130,246,0.08)",
      badge: "Scheduled",
    },
    {
      id: 4,
      title: "Air Filter Replacement",
      date: "Due Jun 15, 2026",
      status: "scheduled",
      dotColor: T.quarter,
      badgeColor: T.secondary,
      badgeBg: "rgba(0,0,0,0.04)",
      badge: "Scheduled",
    },
  ];

  return (
    <div style={{ minHeight: "100%", backgroundColor: T.bg }}>
      <div style={{ padding: "20px 20px 32px" }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: T.tertiary, letterSpacing: 0.1, marginBottom: 4 }}>
            Service history & schedule
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
            Maintenance
          </h1>
        </div>

        {/* ── Next service card ───────────────────────────────────────────── */}
        <div style={{ ...cardBase, padding: "18px 20px", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: "rgba(245,158,11,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Calendar
                style={{ width: 17, height: 17, color: T.amber, strokeWidth: 1.6 }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ ...sectionLabel, marginBottom: 6 }}>Next Service</p>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: T.primary,
                  letterSpacing: -0.2,
                  marginBottom: 3,
                }}
              >
                Tire Rotation
              </div>
              <div style={{ fontSize: 12, color: T.secondary, marginBottom: 10 }}>
                Scheduled for Apr 6, 2026
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "rgba(245,158,11,0.08)",
                  borderRadius: 20,
                  padding: "4px 10px",
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: T.amber,
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 600, color: T.amber }}>
                  In 12 days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section label ──────────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>All Services</p>

        {/* ── Services list ──────────────────────────────────────────────── */}
        <div
          style={{
            ...cardBase,
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 20px",
                borderBottom:
                  index < items.length - 1
                    ? "0.5px solid rgba(60,60,67,0.08)"
                    : "none",
              }}
            >
              {/* Status dot */}
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: item.dotColor,
                  flexShrink: 0,
                  opacity: item.status === "completed" ? 1 : 0.7,
                }}
              />

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: item.status === "completed" ? T.secondary : T.primary,
                    marginBottom: 2,
                    letterSpacing: -0.1,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 11, color: T.quarter }}>
                  {item.date}
                </div>
              </div>

              {/* Badge */}
              <div
                style={{
                  backgroundColor: item.badgeBg,
                  borderRadius: 20,
                  padding: "3px 9px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: item.badgeColor,
                  }}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA button ─────────────────────────────────────────────────── */}
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            backgroundColor: T.primary,
            color: "#FFFFFF",
            borderRadius: 18,
            padding: "15px 20px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
            border: "none",
            cursor: "pointer",
            marginBottom: 12,
          }}
        >
          <Plus style={{ width: 16, height: 16, strokeWidth: 2.2 }} />
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>
            Schedule Service
          </span>
        </button>

        {/* ── Tips card ──────────────────────────────────────────────────── */}
        <div style={{ ...cardBase, padding: "16px 20px" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: T.primary,
              marginBottom: 6,
            }}
          >
            Service Tips
          </div>
          <div
            style={{
              fontSize: 12,
              color: T.secondary,
              lineHeight: 1.65,
              letterSpacing: 0.1,
            }}
          >
            Regular maintenance keeps your car running smoothly and helps prevent costly repairs down the road.
          </div>
        </div>

      </div>
    </div>
  );
}
