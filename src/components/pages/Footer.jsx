import React from "react";

function Footer() {
  return (
    <>
      <div className="footer mx-auto pt-10 ">
        <div className="column1">
          <div className="logo ">
            <a href="/">
              <span className="haus">haus</span>
              <span className="parti">
                <i>Parti.</i>
              </span>
            </a>
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
        {/* <div className="column2">Location</div> */}
        {/* <div className="column3">Subscribe to our newsletters</div> */}
        <div className="column4">Year</div>
      </div>
    </>
  );
}

export default Footer;
