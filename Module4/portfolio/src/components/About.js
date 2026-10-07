import { useEffect, useState } from 'react';
function About() {
const [text, setText] = useState('');
const words = ['Web Development', 'AI', 'NLP'];

useEffect(() => {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typing = setInterval(() => {
    const currentWord = words[wordIndex];

    if (!deleting) {
      setText(currentWord.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;
      }
    } else {
      setText(currentWord.substring(0, charIndex - 1));
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
  }, 120);

  return () => clearInterval(typing);
}, []);
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            V. Harini
          </h1>

          <h2 className="hero-purpose">
            Building Technology with Purpose
          </h2>

          <p className="hero-role">
            Computer Science Engineering Student
            <span> | </span>
            {text}
            <span className="typing-cursor">|</span>
          </p>

          <p className="hero-description">
            I build interactive web experiences while exploring AI
            and NLP to create technology that is useful, accessible,
            and meaningful to people.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              Explore My Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>

          </div>

        </div>


        {/* Hero Profile Card */}

        <div className="hero-visual">

          <div className="profile-card">

            <div className="profile-initials">
              VH
            </div>

            <p className="profile-course">
              Computer Science Engineering
            </p>

            <div className="profile-tags">
              <span>Web Development</span>
              <span>Python</span>
              <span>AI</span>
              <span>NLP</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="section">

        <div className="section-heading">

          <span>01</span>

          <h2>
            Exploring the Connection Between Technology and People
          </h2>

        </div>


        <div className="about-content">

          <div className="about-text">

            <p>
              I'm V. Harini, a pre-final-year Computer Science
              Engineering student exploring web development,
              cloud applications, artificial intelligence,
              and Natural Language Processing.
            </p>

            <p>
              I enjoy turning ideas into interactive web
              experiences and exploring how technology can be
              designed to be useful, accessible, and meaningful
              to people. My current learning journey includes
              HTML, CSS, JavaScript, Python, Flask, cloud
              deployment, AI, and NLP.
            </p>

            <p>
              During a three-month internship at EduTanr, I gained
              exposure to AI, Machine Learning, and Data Science.
              I've also explored Natural Language Processing,
              Deep Learning, Computer Vision, and AI agents
              through courses, certifications, and hands-on
              learning.
            </p>

            <p>
              Beyond technology, I'm interested in personality
              development, mental health, communication,
              soft skills, and corporate training. These
              interests influence the way I think about learning,
              presenting ideas, communicating effectively, and
              creating technology that people can understand
              and use.
            </p>

            <p>
              I'm currently building my foundation through
              academic projects, personal explorations, and
              practical learning, with the goal of gradually
              developing deeper skills in web development,
              cloud, AI, and NLP.
            </p>

          </div>


          {/* ================= HIGHLIGHTS ================= */}

          <div className="about-highlights">

            <div className="highlight-card">

              <span className="highlight-icon">
                01
              </span>

              <h3>
                Web Development
              </h3>

              <p>
                Building responsive and interactive web
                experiences using HTML, CSS, and JavaScript.
              </p>

            </div>


            <div className="highlight-card">

              <span className="highlight-icon">
                02
              </span>

              <h3>
                AI & NLP
              </h3>

              <p>
                Exploring artificial intelligence and NLP
                through projects, learning, and experimentation.
              </p>

            </div>


            <div className="highlight-card">

              <span className="highlight-icon">
                03
              </span>

              <h3>
                Cloud & Deployment
              </h3>

              <p>
                Learning how applications can be deployed
                and made accessible through modern cloud
                platforms.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;