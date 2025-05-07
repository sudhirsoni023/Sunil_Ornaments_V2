import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const Settings = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />

      <div className="d-flex flex-grow-1">
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <SideBar />
        </div>

        <div className="flex-grow-1 p-4 overflow-auto">
          <h2 className="mb-4">Settings </h2>
        </div>
      </div>
    </div>
  );
};

export default Settings;
