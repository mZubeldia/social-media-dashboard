import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="title_and_followers_wrapper">
          <h1>Social Media Dashboard</h1>
          <span className="bold">Total Followers: 23,004</span>
        </div>
        <div className="theme_color">
          <span className="bold">Dark Mode</span>
          <button>boton</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
