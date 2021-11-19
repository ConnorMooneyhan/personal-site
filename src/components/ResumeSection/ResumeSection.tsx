import '../../resources/resume-mooneyhan.pdf';
import Resume from './Resume';

const ResumeSection = () => {
  const resumeFits = window.innerWidth > 650;
  
  return (
    <section className="Resume-Section" id="resume">
      <h2>Resume</h2>
      {resumeFits && <Resume />}
      {!resumeFits && [
        <h3 style={{color: 'darkred'}}>Unable to fit resume on screen.</h3>,
        <h4 style={{color: 'darkred'}}>(If possible, try rotating your device to landscape mode and reloading the page.)</h4>
      ]}
      <p>
        You can also <a href="https://github.com/ConnorMooneyhan/ConnorMooneyhan.github.io/raw/main/src/resources/resume-mooneyhan.pdf" download>download my resume</a> as a pdf.
      </p>
    </section>
  );
}

export default ResumeSection;