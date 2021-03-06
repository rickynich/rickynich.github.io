import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = "Nicholas Richard's portfolio site"
  const siteDescription = "A portfolio site to display some of Nick Richard's projects"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h3 style={{ color: 'black' }}>
              Hi I'm Nick,
              <br />
            </h3>
          </header>
          <p>
            a software developer with a full-stack mindset who loves the process
            of forging the bridge between conceptualization and a tangible,
            impactful product. Programming is my outlet for my problem-solving and creative
            expression, and I happily combine it with my strong desire of
            exploring the unfamiliar and learning new technologies. Please feel
            free to look at some of my work below, or contact me through your
            preferred medium on the left.
            <br /> <p></p>
            <strong>
              <u>Technical Competencies:</u>
            </strong>{' '}
            <br />
            -Languages and technologies: JavaScript, Python, HTML5, CSS3, SQL,
            Flask, Docker <br />
            -Frameworks: React.js, Redux <br />
            -Component libraries: Chakra UI, Material UI<br />
            -Methodologies: OOP, Test Driven Development, Pair Programming,
            REST, AJAX <br /> -Version Control: Git, GitHub
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        {/* <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Boston, MA
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  617-980-8459
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">nrich414@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
