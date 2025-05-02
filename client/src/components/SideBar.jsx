import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="sidebar mt-4 bg-dark">
        <span onclick="toggleSidebar()" className="crossBtn">
          &times;
        </span>
        <Link to="/bill" className="item">
          <i className="fa-solid fa-house-user"></i> Home
        </Link>
        <Link to="/view-bills" className="item">
          <i className="fa-solid fa-address-card"></i> View Bills
        </Link>
        <Link to="/add-new-bill" className="item">
          <i className="fa-solid fa-address-book"></i> Add New Bill
        </Link>
        <Link to="/profile" className="item">
          <i className="fa-solid fa-user"></i> Your Profile
        </Link>
        <Link to="/settings" className="item">
          <i className="fa-solid fa-gear"></i> Settings
        </Link>
        <div className="divider"></div>
      </div>
      {/* <!-- End of Sidebar  --> */}
    </div>
  );
};

export default SideBar;
