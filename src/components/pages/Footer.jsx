import React from "react";

function Footer() {
  return <>
      <div className='footer '>
        <div className='column1'>
        <div className="left">
          <a href="/">
            <span className="haus">haus</span>
            <span className="parti">
              <i>Parti.</i>
            </span>
          </a>
          <div className="footer1">
            <ul>
              <a href="blog">
                Blog
              </a>
              <a href="events">
                Events
              </a>
              <a href="about">
                About
              </a>
              <a href="blog">
                Blog
              </a>
              <a href="blog">
                Blog
              </a>
            </ul>
          </div>
        </div>
        </div>
        <div className='column2'>Location</div>
        <div className='column3'>Subscribe to our newsletters</div>
    </div>
  </>;
}

export default Footer;
