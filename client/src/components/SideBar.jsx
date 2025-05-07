import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="sidebar mt-1 bg-dark">
        <span onclick="toggleSidebar()" className="crossBtn">
          &times;
        </span>
        <Link to="/welcome" className="item">
          Home
        </Link>
        <Link to="/view-bills" className="item">
          View Bills
        </Link>
        <Link to="/add-new-bill" className="item">
          Add New Bill
        </Link>
        <Link to="/profile" className="item">
          Your Profile
        </Link>
        <Link to="/settings" className="item">
          Settings
        </Link>
        <div className="divider"></div>
      </div>
      {/* <!-- End of Sidebar  --> */}
    </div>
  );
};

export default SideBar;
