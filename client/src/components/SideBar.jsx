import "../assets/css/style.css";
import React from "react";
const SideBar = () => {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="sidebar mt-4 bg-dark">
        <span onClick="toggleSidebar()" className="crossBtn">
          &times;
        </span>
        <button onClick={() => renderComponent("Home")}>Home</button>
        <button onClick={() => renderComponent("ViewBills")}>View Bills</button>
        <button onClick={() => renderComponent("AddBill")}>Add New Bill</button>
        <button onClick={() => renderComponent("Profile")}>Your Profile</button>
        <button onClick={() => renderComponent("Settings")}>Settings</button>
        <div className="divider"></div>
      </div>
      {/* <!-- End of Sidebar  --> */}
    </div>
  );
};

export default SideBar;
