import React, { useState } from "react";
import Navigation from "./Navigation";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Community from "./pages/Community";
import Service from "./pages/Service";
import Support from "./pages/Support";

export default function Header() {
    const [currentPage, setCurrentPage] = useState("HomePage");

    const renderPage = () => {
        switch (currentPage) {
          case "HomePage":
            return <HomePage />;
          case "Products":
            return <Products />;
          case "Community":
            return <Community />;
          case "Service":
            return <Service />;
          default:
            return <Support />;
        }
      };

      const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
          <nav class="navbar bg-dark">
            <Navigation
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </nav>
          <div className="d-flex flex-column min-vh-100">{renderPage()}</div>
        </div>
    );
}