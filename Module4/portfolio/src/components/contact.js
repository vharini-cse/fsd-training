function Contact() {
  return (
    <>
      {/* ================= EXPERIENCE SECTION ================= */}

      <section id="experience" className="section">

        <div className="section-heading">

          <span>04</span>

          <h2>
            Experience & Learning
          </h2>

        </div>


        <div className="experience-grid">


          {/* Internship */}

          <div className="experience-card">

            <span className="experience-label">
              Internship
            </span>

            <h3>
              EduTanr
            </h3>

            <p className="experience-duration">
              3-Month Internship
            </p>

            <p>
              Gained exposure to Artificial Intelligence,
              Machine Learning, and Data Science while
              exploring practical applications and
              industry-oriented learning.
            </p>

          </div>


          {/* Certifications */}

          <div className="experience-card">

            <span className="experience-label">
              Certifications & Learning
            </span>

            <h3>
              AI, Data & Technology
            </h3>

            <p>
              Explored AI, Machine Learning, Data Science,
              Deep Learning, Natural Language Processing,
              Computer Vision, and MongoDB through
              certifications and structured learning.
            </p>

          </div>


          {/* AI Agents */}

          <div className="experience-card">

            <span className="experience-label">
              Recent Learning
            </span>

            <h3>
              AI Agents Bootcamp
            </h3>

            <p>
              Completed an AI Agents bootcamp and explored
              how AI-powered agents can be designed to
              automate tasks and build practical workflows.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-heading">

          <span>05</span>

          <h2>
            Let's Connect
          </h2>

        </div>


        <div className="contact-content">


          {/* Contact Information */}

          <div className="contact-intro">

            <h3>
              Have a project idea, want to collaborate,
              or simply want to connect?
            </h3>

            <p>
              I'd love to hear from you.
            </p>


            <div className="contact-details">


              {/* Email */}

              <div className="contact-item">

                <strong>
                  Email
                </strong>

                <a href="mailto:harini24cse@gmail.com">
                  harini24cse@gmail.com
                </a>

              </div>


              {/* GitHub */}

              <div className="contact-item">

                <strong>
                  GitHub
                </strong>

                <a
                  href="https://github.com/vharini-cse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/vharini-cse
                </a>

              </div>


              {/* Location */}

              <div className="contact-item">

                <strong>
                  Location
                </strong>

                <span>
                  India
                </span>

              </div>

            </div>

          </div>


          {/* Contact Form */}

          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>


              <p className="form-message"></p>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <p>
            © {new Date().getFullYear()} V. Harini.
            All rights reserved.
          </p>

          <a
            href="https://github.com/vharini-cse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </footer>
    </>
  );
}

export default Contact;