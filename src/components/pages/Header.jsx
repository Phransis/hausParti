import React from "react";

function Header() {
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <a href="/">
            <span className="haus">haus</span>
            <span className="parti">
              <i>Parti.</i>
            </span>
          </a>
        </div>
        <div className="center">
          <ul>
            <a href="blog">
              <li>Blog</li>
            </a>
            <a href="/events">
              <li>Events</li>
            </a>
            <a href="past-events">
              <li>Past Events</li>
            </a>
            <a href="about">
              <li>About</li>
            </a>
          </ul>
        </div>
        <div className="right">
          <ul>
            <a href="/login">
              <li>Login</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
