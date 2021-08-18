import "../../Styles/admin/AdminScreen.css";

import React from "react";
import AdminDashboardScreen from "./AdminDashboardScreen";
import AdminCustomersScreen from "./AdminCustomersScreen";
import AdminTailorsScreen from "./AdminTailorsScreen";
import AdminOrdersScreen from "./AdminOrdersScreen";
import AdminProductsScreen from "./AdminProductsScreen";
import theAdminSideBarData from "../../data/AdminData.js";
import { TheEntireSidebar } from "../../components/TheEntireSidebar";
const ourTabs = [
  <AdminDashboardScreen></AdminDashboardScreen>,
  <AdminCustomersScreen></AdminCustomersScreen>,
  <AdminTailorsScreen></AdminTailorsScreen>,
  <AdminOrdersScreen></AdminOrdersScreen>,
  <AdminProductsScreen></AdminProductsScreen>,
];
function AdminScreen() {
  return (
    <div>
      <TheEntireSidebar
        ourTabs={ourTabs}
        name="Aman Chaudhary"
        type="Administrator"
        theData={theAdminSideBarData}
      ></TheEntireSidebar>
    </div>
  );
}

export default AdminScreen;
