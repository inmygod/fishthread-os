import { useState } from "react";

import DashboardPage from "./pages/DashboardPage";
import PurchasePage from "./pages/PurchasePage";
import SalePage from "./pages/SalePage";
import CustomersPage from "./pages/CustomersPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

import BottomNavigation from "./components/BottomNavigation";

export default function App() {
  const [activePage, setActivePage] =
    useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "purchase":
        return <PurchasePage />;

      case "sale":
        return <SalePage />;

      case "customers":
        return <CustomersPage />;

      case "reports":
        return <ReportsPage />;

      case "settings":
        return <SettingsPage />;

      default:
        return <DashboardPage />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {renderPage()}

      <BottomNavigation
        activePage={activePage}
        onNavigate={setActivePage}
      />
    </div>
  );
}
