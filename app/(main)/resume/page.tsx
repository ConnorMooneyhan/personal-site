export default function ResumePage() {
  return (
    <section id="resume">
      <header>
        <h1>Connor Mooneyhan</h1>
        <p>
          Durham, NC | (850) 509-2322 | connmoo@gmail.com |{" "}
          <a href="https://github.com/ConnorMooneyhan">
            https://github.com/ConnorMooneyhan
          </a>
        </p>
      </header>
      <main>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>JS / TS / React</li>
            <li>Next.js</li>
            <li>Material UI (MUI)</li>
            <li>Chakra UI</li>
            <li>HTML5 / CSS3</li>
            <li>Git / GitHub</li>
            <li>JIRA / BitBucket</li>
            <li>Prismic</li>
            <li>Bash</li>
            <li>Linux / UNIX</li>
            <li>Rust</li>
            <li>Vim / NeoVim</li>
          </ul>
        </section>
        <section>
          <h2>Relevant Work Experience</h2>
          <div>
            <h3>Associate Front End Developer</h3>
            <h4>
              <em>
                Atlantic BT, Raleigh, NC (Remote) | February 2022 - Present
              </em>
            </h4>
            <ul>
              <li>
                Built static Single Page Application with authentication,
                role-based authorization, and client-side data fetching using
                Next.js and Material UI.
              </li>
              <li>
                Used Figma designs to create static marketing website leveraging
                Prismic, Next.js, and Chakra UI.
              </li>
              <li>
                Identified bottlenecks in application performance and
                implemented robust fixes to improve site load speed by over
                300%.
              </li>
              self-hosted fonts, lazy-loaded images, requested right-sized
              images using srcset and sizes HTML properties, prevented video
              preloading, implemented Prismic's nested (child - parent) routing
              system
              <li>Improved Google Maps component performance by 600%.</li>
            </ul>
          </div>
          <div>
            <h3>Departmental Secretary</h3>
            <h4>
              <em>Cone Health, Offsite Distribution Center, Greensboro, NC</em>
            </h4>
            <ul>
              <li>
                Developed query generation tool using JavaScript that enabled
                easier access to vital departmental data.
              </li>
              <li>
                Created and maintained data-collection tools in Microsoft Excel
                that demonstrated a need for a larger workforce, leading to the
                hiring of 3 new employees.
              </li>
              <li>
                Improved department-wide understanding of Voxware software after
                careful examination of documentation.
              </li>
            </ul>
          </div>
          <div>
            <h3>Math Tutor</h3>
            <h4>
              <em>Tallahassee Community College, Tallahassee, FL</em>
            </h4>
            <ul>
              <li>
                Tutored nearly 1000 students and received frequent 5-star
                ratings for clarity of explanation and patience.
              </li>
              <li>
                Earned CRLA (College Reading and Learning Association) Level 2
                certification, demonstrating mastery of tutoring practices and
                principles.
              </li>
            </ul>
            <h4>
              <em>Private Tutoring, Tallahassee, FL</em>
            </h4>
            <ul>
              <li>
                Advertised online and in-person to gain 15+ new students, many
                of whom returned for help in future courses.
              </li>
              <li>
                Evaluated student performance and reported to parents of
                high-school tutees to recommended next steps and supplemental
                materials.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div>
            <h3>Mathematics, Bachelor of Science with Honors</h3>
            <h4>
              <em>Florida State University, Tallahassee, FL</em>
            </h4>
            <p>Relevant Coursework: Intro to C++ Programming</p>
          </div>
          <div>
            <h3>Associate of Arts</h3>
            <h4>
              <em>Tallahassee Community College, Tallahassee, FL</em>
            </h4>
          </div>
        </section>
      </main>
    </section>
  );
}
