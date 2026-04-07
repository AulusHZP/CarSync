import { Outlet, NavLink } from "react-router";
import { Home, Receipt, Wrench, Bell, User } from "lucide-react";

function StatusBar() {
  return (
    <div
      className="flex items-center justify-between flex-shrink-0 z-10"
      style={{ height: 44, paddingLeft: 24, paddingRight: 20, backgroundColor: "#F2F2F7" }}
    >
      <span style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1E", letterSpacing: -0.3 }}>
        9:41
      </span>
      <div className="flex items-center" style={{ gap: 6 }}>
        {/* Signal bars */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7.5" width="3" height="4.5" rx="0.8" fill="#1C1C1E" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.8" fill="#1C1C1E" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.8" fill="#1C1C1E" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill="#1C1C1E" fillOpacity="0.25" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="11" r="1.4" fill="#1C1C1E" />
          <path d="M4.6 7.7C5.6 6.7 6.74 6.1 8 6.1s2.4.6 3.4 1.6" stroke="#1C1C1E" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M1.4 4.6C3.2 2.7 5.47 1.6 8 1.6s4.8 1.1 6.6 3" stroke="#1C1C1E" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
        {/* Battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3.3" stroke="#1C1C1E" strokeOpacity="0.3" />
          <rect x="2" y="2" width="17" height="8" rx="1.8" fill="#1C1C1E" />
          <path d="M23.5 4.2v3.6a1.8 1.8 0 000-3.6z" fill="#1C1C1E" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

type NavItemProps = {
  to: string;
  end?: boolean;
  icon: React.ElementType;
  label: string;
};

function NavItem({ to, end, icon: Icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className="flex flex-col items-center transition-all"
      style={{ minWidth: 60, paddingTop: 8, paddingBottom: 4, gap: 4 }}
    >
      {({ isActive }) => (
        <>
          <div
            style={{
              width: 36,
              height: 28,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isActive ? "rgba(0,0,0,0.07)" : "transparent",
              transition: "background-color 0.15s",
            }}
          >
            <Icon
              style={{
                width: 21,
                height: 21,
                color: isActive ? "#1C1C1E" : "#C7C7CC",
                strokeWidth: isActive ? 2.1 : 1.6,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 10,
              letterSpacing: 0.1,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#1C1C1E" : "#C7C7CC",
            }}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export function RootLayout() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#E5E5EA" }}
    >
      <div
        className="w-full relative flex flex-col overflow-hidden"
        style={{
          maxWidth: 390,
          height: "100svh",
          backgroundColor: "#F2F2F7",
        }}
      >
        <StatusBar />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto" style={{ paddingBottom: 88 }}>
          <Outlet />
        </div>

        {/* Bottom navigation */}
        <nav
          className="absolute bottom-0 left-0 right-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "0.5px solid rgba(60,60,67,0.18)",
            height: 72,
          }}
        >
          <div
            className="flex items-start justify-around"
            style={{ paddingLeft: 4, paddingRight: 4, height: "100%" }}
          >
            <NavItem to="/" end icon={Home} label="Home" />
            <NavItem to="/expenses" icon={Receipt} label="Expenses" />
            <NavItem to="/maintenance" icon={Wrench} label="Service" />
            <NavItem to="/alerts" icon={Bell} label="Alerts" />
            <NavItem to="/profile" icon={User} label="Profile" />
          </div>
        </nav>
      </div>
    </div>
  );
}
