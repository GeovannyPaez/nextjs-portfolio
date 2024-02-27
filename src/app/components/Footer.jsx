import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Logo
          width={100}
          height={100}
        />
        <p className="text-slate-600">® 2024 Copyright Geovanny Paez</p>
      </div>
    </footer>
  );
};

export default Footer;
