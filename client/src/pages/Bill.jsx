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
          <section>
            <h1>Welcome Sunil Soni Ji</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bill;
