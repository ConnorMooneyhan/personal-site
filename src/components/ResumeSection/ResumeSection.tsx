import '../../resources/resume-mooneyhan.pdf';
import Resume from './Resume';

const ResumeSection = () => {
  return (
    <section className="Resume-Section" id="resume">
      <h2>Resume</h2>
      <Resume />
      <p>
        You can also <a href="../../resources/resume-mooneyhan.pdf" download>download my resume</a> as a pdf if you prefer.
      </p>
    </section>
  );
}

export default ResumeSection;