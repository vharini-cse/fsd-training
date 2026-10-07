function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">

        <span>02</span>

        <h2>
          Skills & Technologies
        </h2>

      </div>


      <div className="skills-grid">

        {/* Front End */}

        <div className="skill-card">

          <h3>
            Front-End Development
          </h3>

          <div className="skill-tags">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>

          </div>

        </div>


        {/* Programming */}

        <div className="skill-card">

          <h3>
            Programming & Backend
          </h3>

          <div className="skill-tags">

            <span>Python</span>
            <span>Flask</span>
            <span>Java</span>

          </div>

        </div>


        {/* AI */}

        <div className="skill-card">

          <h3>
            AI & Data
          </h3>

          <div className="skill-tags">

            <span>AI</span>
            <span>NLP</span>
            <span>NLTK</span>
            <span>Machine Learning</span>
            <span>Data Science</span>

          </div>

        </div>


        {/* Cloud */}

        <div className="skill-card">

          <h3>
            Database & Cloud
          </h3>

          <div className="skill-tags">

            <span>MongoDB</span>
            <span>Render</span>
            <span>Vercel</span>
            <span>Streamlit</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;