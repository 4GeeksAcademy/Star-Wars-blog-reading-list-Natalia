// src/pages/Layout.jsx

import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import stars from "../assets/img/stars.gif";

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${stars})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        color: "yellow",
      }}
    >
      <ScrollToTop />
      <Navbar />

      {/* Main content that pushes footer down */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
