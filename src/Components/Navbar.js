import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';

const NavBar = () => (
  <div className="container min-h-36 mx-auto">
    <nav className="h-full flex justify-around flex-wrap">
      <div className="flex items-center py-4">
        <img
          src="/img/diary.jpg"
          alt="welcome message"
          className="w-1/12"
          width="20"
          height="20"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center">
        <MainNav />
        <AuthNav />
      </div>
    </nav>
  </div>
);

export default NavBar;
