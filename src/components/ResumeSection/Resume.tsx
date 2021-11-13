const Resume = () => {
  return (
    <section className="Resume">
      <div className="Resume__sidebar">
        <h1>Connor Mooneyhan</h1>
        <h2 className="Resume__sidebar__subtitle">Web Developer</h2>
        
        <h2>Personal Info</h2>
        <h3>Email</h3>
        <p>connmoo@gmail.com</p>
        <h3>Phone</h3>
        <p>(850) 509-2322</p>
        <h3>GitHub</h3>
        <p>https://github.com/ConnorMooneyhan</p>
        <h3>LinkedIn</h3>
        <p>https://www.linkedin.com/in/ConnorMooneyhan</p>

        <h2>Skills</h2>
        <p>Written and Verbal Communication</p>
        <p>Problem Solving</p>
        <p>Analytical Skills</p>
        <p>Technical Writing</p>
        <p>Enthusiasm</p>
        <p>Leadership</p>
        <p>Organizational Skills</p>
        <p>Teamwork</p>

        <h2>Technologies</h2>
        <p>React</p>
        <p>Typescript</p>
        <p>Node.js</p>
        <p>SASS</p>
        <p>Rust</p>
      </div>
      <div className="Resume__primary">
        <p>Highly-ambitious self-taught web developer with drive to deepen current 
        knowledge and develop new skills. Thorough understanding of mathematics with
        strong capacity for creative analytical thinking. Four years of experience
        collaborating and communicating effectively in a professional setting.</p>
        <div className="Resume__primary__section">
          <h2 className="Resume__primary__section__title">Work History</h2>
          <div className="Resume__primary__section__item">
            <p>January 2021 <br />- Present</p>
            <div className="Resume__primary__section__item__content">
              <h3>Departmental Secretary</h3>
              <h4><em>Cone Health, Offsite Distribution Center, Greensboro, NC</em></h4>
              <ul>
                <li>Created and maintained data-collection tools that demonstrated a need for a larger workforce, leading to the hiring of 3 new employees.</li>
                <li>Improved department-wide understanding of Voxware software after careful examination of documentation.</li>
                <li>Organized courier deliveries and time-sensitive product requests for 5 hospitals and 100+ physician practices.</li>
              </ul>
            </div>
          </div>
          <div className="Resume__primary__section__item">
            <p>January 2019 <br />- August 2020</p>
            <div className="Resume__primary__section__item__content">
              <h3>Math Tutor</h3>
              <h4><em>Tallahassee Community College, Tallahassee, FL</em></h4>
              <ul>
                <li>Tutored nearly 1000 students and received frequent 5-star ratings for clarity of explanation and patience.</li>
                <li>Earned CRLA (College Reading and Learning Association) Level 2 certification, demonstrating mastery of tutoring practices and principles.</li>
              </ul>
              <h4><em>Private Tutoring, Tallahassee, FL</em></h4>
              <ul>
                <li>Advertised online and in-person to gain 15+ new students, many of whom returned for help in future courses.</li>
                <li>Evaluated student performance and reported to parents of high-school tutees to recommended next steps and supplemental materials.</li>
              </ul>
            </div>
          </div>
          <div className="Resume__primary__section__item">
            <p>August 2017 <br />- January 2019</p>
            <div className="Resume__primary__section__item__content">
              <h3>Host/Server</h3>
              <h4><em>Red Lobster, Tallahassee, FL</em></h4>
              <ul>
                <li>Served food and beverages to an average of 4 tables per hour.</li>
                <li>Distributed guests fairly amongst an average of 8-12 servers per night.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Resume__primary__section">
          <h2 className="Resume__primary__section__title">Education</h2>
          <div className="Resume__primary__section__item">
            <p>May 2018 <br />- May 2020</p>
            <div className="Resume__primary__section__item__content">
              <h3>Mathematics, Bachelor of Science with Honors</h3>
              <h4><em>Florida State University, Tallahassee, FL</em></h4>
              <p>Relevant Coursework: Intro to C++ Programming</p>
            </div>
          </div>
          <div className="Resume__primary__section__item">
            <p>May 2017 <br />- August 2018</p>
            <div className="Resume__primary__section__item__content">
              <h3>Associate of Arts</h3>
              <h4><em>Tallahassee Community College, Tallahassee, FL</em></h4>
            </div>
          </div>
        </div>
        <div className="Resume__primary__section">
          <h2 className="Resume__primary__section__title">Projects</h2>
          <div className="Resume__primary__section__item">
            <span></span>
            <div className="Resume__primary__section__item__content">
              <h3>Pong</h3>
              <h4><em>https://github.com/ConnorMooneyhan/pong</em></h4>
              <p>Utilizes the Canvas API to implement a classic game of Pong in the browser.</p>
            </div>
          </div>
          <div className="Resume__primary__section__item">
            <span></span>
            <div className="Resume__primary__section__item__content">
              <h3>Cellular Automata</h3>
              <h4><em>https;//github.com/ConnorMooneyhan/cellular-automata</em></h4>
              <p>Customizable tool for visualizing basic cellular automata. The "Favorites" section of this app demonstrates CRUD capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;