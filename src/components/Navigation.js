import React from "react";
import GTEKlogo from "../images/GTEK.png";

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <div className="d-inline">
        <div class="container-fluid">
          <a 
            href="#homepage" 
            onClick={() => handlePageChange("HomePage")} 
            className={
              currentPage === "HomePage" ? "nav-link active" : "nav-link"
            }>
            <img src={GTEKlogo} alt="Logo" width="90" height="30" class="d-inline-block align-text-top"/>
          </a>
        </div>
        <ul className="nav googleFont" style={{ fontSize: "20px" }}>
          <li className="nav-item">
            <a
              href="#products"
              onClick={() => handlePageChange("Products")}
              className={
                currentPage === "Products" ? "nav-link active" : "nav-link"
              }
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#community"
              onClick={() => handlePageChange("Community")}
              className={
                currentPage === "Community" ? "nav-link active" : "nav-link"
              }
            >
              Community
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#service"
              onClick={() => handlePageChange("Service")}
              className={
                currentPage === "Service" ? "nav-link active" : "nav-link"
              }
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#support"
              onClick={() => handlePageChange("Support")}
              className={
                currentPage === "Support" ? "nav-link active" : "nav-link"
              }
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavTabs;
  