import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import "./layout.css";

export function Layout() {
  return (
    <div className="layout">
      <Header displayMenu={true} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
