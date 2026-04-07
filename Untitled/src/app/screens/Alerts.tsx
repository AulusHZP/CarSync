import { AlertCircle, TrendingUp, CheckCircle2, Info } from "lucide-react";

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

export function Alerts() {
  const alerts = [
    {
      id: 1,
      icon: AlertCircle,
      iconColor: T.amber,
      iconBg: "rgba(245,158,11,0.08)",
      title: "Maintenance Due Soon",
      message: "Tire rotation scheduled in 12 days",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      icon: TrendingUp,
      iconColor: T.accent,
      iconBg: "rgba(59,130,246,0.08)",
      title: "Fuel Consumption Increased",
      message: "15% higher than usual this week",
      time: "Yesterday",
      unread: true,
    },
    {
      id: 3,
      icon: CheckCircle2,
      iconColor: T.green,
      iconBg: "rgba(34,197,94,0.08)",
      title: "Service Completed",
      message: "Oil change completed successfully",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      icon: Info,
      iconColor: T.secondary,
      iconBg: "rgba(0,0,0,0.04)",
      title: "Insurance Renewal",
      message: "Policy renews in 45 days",
      time: "3 days ago",
      unread: false,
    },
  ];

  const unreadCount = alerts.filter((a) => a.unread).length;

  return (
    <div style={{ minHeight: "100%", backgroundColor: T.bg }}>
      <div style={{ padding: "20px 20px 32px" }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: T.tertiary, letterSpacing: 0.1, marginBottom: 4 }}>
            Stay updated on your car
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: T.primary,
                letterSpacing: -0.6,
                lineHeight: 1.15,
              }}
            >
              Alerts
            </h1>
            {unreadCount > 0 && (
              <div
                style={{
                  minWidth: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: T.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 6px",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF" }}>
                  {unreadCount}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Summary stats ──────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: T.card,
            borderRadius: 18,
            padding: "18px 20px",
            marginBottom: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div style={{ paddingRight: 20 }}>
            <p style={{ ...sectionLabel, marginBottom: 6 }}>Unread</p>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: T.primary,
                letterSpacing: -1,
              }}
            >
              {unreadCount}
            </span>
          </div>
          <div
            style={{
              paddingLeft: 20,
              borderLeft: "0.5px solid rgba(60,60,67,0.1)",
            }}
          >
            <p style={{ ...sectionLabel, marginBottom: 6 }}>Total</p>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: T.primary,
                letterSpacing: -1,
              }}
            >
              {alerts.length}
            </span>
          </div>
        </div>

        {/* ── Section label ──────────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>Recent</p>

        {/* ── Alert list ─────────────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                style={{
                  backgroundColor: T.card,
                  borderRadius: 18,
                  padding: "16px 18px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                  opacity: alert.unread ? 1 : 0.55,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: alert.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Icon
                      style={{
                        width: 15,
                        height: 15,
                        color: alert.iconColor,
                        strokeWidth: 1.7,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 8,
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: T.primary,
                          letterSpacing: -0.1,
                        }}
                      >
                        {alert.title}
                      </span>
                      {alert.unread && (
                        <div
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            backgroundColor: T.accent,
                            flexShrink: 0,
                            marginTop: 4,
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: T.secondary,
                        lineHeight: 1.5,
                        marginBottom: 6,
                        letterSpacing: 0.1,
                      }}
                    >
                      {alert.message}
                    </div>
                    <div style={{ fontSize: 10, color: T.quarter, letterSpacing: 0.2 }}>
                      {alert.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <button
          style={{
            width: "100%",
            backgroundColor: T.card,
            color: T.primary,
            borderRadius: 18,
            padding: "15px 20px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: -0.1 }}>
            Mark All as Read
          </span>
        </button>

      </div>
    </div>
  );
}
