import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Bill = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />

      <div className="d-flex flex-grow-1">
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <SideBar />
        </div>

        <div className="flex-grow-1 p-4 overflow-auto">
          <h2 className="mb-4">Bill Page</h2>
          {/* You can place a form, table, or data display component here */}
          <p>This is where your bill-related content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default Bill;
