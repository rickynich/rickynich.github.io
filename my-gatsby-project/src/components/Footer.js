import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          {/* <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a> */}
        </li>
        <li>
          <a href="https://github.com/rickynich" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicholas-richard-77a9a066/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/u/nicholas-richard"
            className="icon fa-angellist"
          >
            <span className="label">AngelList</span>
          </a>
        </li>
        <li>
          <a href={`mailto:nrich414@gmail.com`} className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
