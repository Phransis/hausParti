import React from "react";

function Footer() {
  return (
    <>
    {/* Restructure the footer to suit Tailindcss */}
      <div className="footer ">
        <footer>

        <div className="column1 ">
          <div className="logo ">
            <a href="/">
              <span className="haus">haus</span>
              <span className="parti">
                <i>Parti.</i>
              </span>
            </a>©  All Rights Reserved.
          </div>
          <div className="footer-links">
            <ul>
              <a href="blog">
                <li>Blog</li>
              </a>
              <a href="events">
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
        </div>
        </footer>
        {/* <div className="column2">Location</div> */}
        {/* <div className="column3">Subscribe to our newsletters</div> */}
        {/* <div className="column4 h-14 bg-gradient-to-r from-purple-500 to-pink-500">Year</div> */}
      </div>
    </>
  );
}

export default Footer;
