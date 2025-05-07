import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Bill from "../pages/Bill";
import ViewBill from "../components/ViewBill";
import AddBill from "../components/AddBill";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import ViewBillDetails from "../pages/ViewBillDetails";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bill" element={<Bill />} />
      <Route path="/view-bills" element={<ViewBill />} />
      <Route path="/view-bill-details" element={<ViewBillDetails />} />
      <Route path="/add-new-bill" element={<AddBill />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element="" />
    </Routes>
  );
};

export default AppRouter;
