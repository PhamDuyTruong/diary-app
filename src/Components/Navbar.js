import React from "react";
import AuthNav from './AuthNav'
import MainNav from './MainNav';


const Navbar = () => {
  return (
    <div className="container min-h-36 mx-auto">
      <nav className="h-full flex justify-around flex-wrap">
        <div className="flex items-center py-4">
          <img
            src="../assets/img/logo.png"
            alt="welcome message"
            className="w-6/12"
            width="50"
            height="20"
          />
        </div>
        <div className="flex items-center justify-center flex-wrap">
            <MainNav />
            <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
