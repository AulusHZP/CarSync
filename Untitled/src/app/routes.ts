import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./screens/Home";
import { Expenses } from "./screens/Expenses";
import { Maintenance } from "./screens/Maintenance";
import { Alerts } from "./screens/Alerts";
import { Profile } from "./screens/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "expenses", Component: Expenses },
      { path: "maintenance", Component: Maintenance },
      { path: "alerts", Component: Alerts },
      { path: "profile", Component: Profile },
    ],
  },
]);
