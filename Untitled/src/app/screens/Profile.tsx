import { Car, Settings, Bell, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";

const T = {
  primary:   "#1C1C1E",
  secondary: "#8E8E93",
  tertiary:  "#AEAEB2",
  quarter:   "#C7C7CC",
  accent:    "#3B82F6",
  green:     "#22C55E",
  amber:     "#F59E0B",
  red:       "#EF4444",
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

export function Profile() {
  const settingsItems = [
    {
      id: 1,
      icon: Bell,
      label: "Notifications",
      value: "On",
      iconColor: T.amber,
      iconBg: "rgba(245,158,11,0.08)",
    },
    {
      id: 2,
      icon: Shield,
      label: "Privacy",
      value: "",
      iconColor: T.accent,
      iconBg: "rgba(59,130,246,0.08)",
    },
    {
      id: 3,
      icon: HelpCircle,
      label: "Help & Support",
      value: "",
      iconColor: T.green,
      iconBg: "rgba(34,197,94,0.08)",
    },
    {
      id: 4,
      icon: Settings,
      label: "App Settings",
      value: "",
      iconColor: T.secondary,
      iconBg: "rgba(0,0,0,0.04)",
    },
  ];

  const carDetails = [
    { label: "Make & Model", value: "Tesla Model 3" },
    { label: "Year",         value: "2024" },
    { label: "License",      value: "ABC-1234" },
    { label: "VIN",          value: "5YJ3E1EA…8392" },
  ];

  return (
    <div style={{ minHeight: "100%", backgroundColor: T.bg }}>
      <div style={{ padding: "20px 20px 32px" }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: T.tertiary, letterSpacing: 0.1, marginBottom: 4 }}>
            Manage your account
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
            Profile
          </h1>
        </div>

        {/* ── User hero card ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(145deg, #1F2937 0%, #111827 100%)",
            borderRadius: 24,
            padding: "22px 22px 20px",
            marginBottom: 24,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            {/* Avatar */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: T.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", letterSpacing: -0.5 }}>
                JD
              </span>
            </div>
            <div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: -0.3,
                  marginBottom: 3,
                }}
              >
                John Doe
              </div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>john.doe@email.com</div>
            </div>
          </div>
          <button
            style={{
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.09)",
              color: "rgba(255,255,255,0.85)",
              borderRadius: 14,
              padding: "12px 16px",
              border: "0.5px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: -0.1,
            }}
          >
            Edit Profile
          </button>
        </div>

        {/* ── Section: My Car ─────────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>My Car</p>

        <div
          style={{
            backgroundColor: T.card,
            borderRadius: 18,
            overflow: "hidden",
            marginBottom: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
          }}
        >
          {/* Car header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 20px 14px",
              borderBottom: "0.5px solid rgba(60,60,67,0.08)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                backgroundColor: "rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Car style={{ width: 15, height: 15, color: T.primary, strokeWidth: 1.6 }} />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: T.primary,
                letterSpacing: -0.2,
              }}
            >
              Tesla Model 3
            </span>
          </div>

          {/* Detail rows */}
          {carDetails.map((d, i) => (
            <div
              key={d.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderBottom:
                  i < carDetails.length - 1
                    ? "0.5px solid rgba(60,60,67,0.06)"
                    : "none",
              }}
            >
              <span style={{ fontSize: 13, color: T.secondary }}>{d.label}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: T.primary, letterSpacing: -0.1 }}>
                {d.value}
              </span>
            </div>
          ))}
        </div>

        {/* ── Section: Settings ───────────────────────────────────────────── */}
        <p style={{ ...sectionLabel, marginBottom: 12, paddingLeft: 2 }}>Settings</p>

        <div
          style={{
            backgroundColor: T.card,
            borderRadius: 18,
            overflow: "hidden",
            marginBottom: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
          }}
        >
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  padding: "13px 20px",
                  borderBottom:
                    index < settingsItems.length - 1
                      ? "0.5px solid rgba(60,60,67,0.07)"
                      : "none",
                  background: "none",
                  border: "none",
                  borderBottomStyle: index < settingsItems.length - 1 ? "solid" : "none",
                  borderBottomWidth: index < settingsItems.length - 1 ? 0.5 : 0,
                  borderBottomColor: "rgba(60,60,67,0.07)",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    backgroundColor: item.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    style={{ width: 15, height: 15, color: item.iconColor, strokeWidth: 1.7 }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 400, color: T.primary }}>
                    {item.label}
                  </div>
                  {item.value && (
                    <div style={{ fontSize: 11, color: T.quarter, marginTop: 1 }}>
                      {item.value}
                    </div>
                  )}
                </div>
                <ChevronRight
                  style={{ width: 14, height: 14, color: T.quarter, strokeWidth: 2 }}
                />
              </button>
            );
          })}
        </div>

        {/* ── Log Out ────────────────────────────────────────────────────── */}
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            backgroundColor: T.card,
            borderRadius: 18,
            padding: "15px 20px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
            marginBottom: 32,
          }}
        >
          <LogOut style={{ width: 15, height: 15, color: T.red, strokeWidth: 1.7 }} />
          <span style={{ fontSize: 15, fontWeight: 500, color: T.red, letterSpacing: -0.1 }}>
            Log Out
          </span>
        </button>

        {/* ── Version ────────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 10, color: T.quarter, letterSpacing: 0.3 }}>
            CarSync v1.1.0
          </span>
        </div>

      </div>
    </div>
  );
}
