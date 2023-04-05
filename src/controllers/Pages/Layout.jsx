import React from "react";
import Menu from "./Menu";

const handleBack = () => {
  window.history.back();
}

const Layout = ({ title = "Title", description = "Description", text, className, children }) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="" onClick={handleBack}>{text}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
