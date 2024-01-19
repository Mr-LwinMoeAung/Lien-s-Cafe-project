import Proptypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

Layout.prototype = {
  children: Proptypes.node.isRequired,
};
