
import '../App.css';

function Projects() {
  return (
    <section className="projects container">
      <h1>Projects</h1>
      <ul>
        <li>
          <strong>Portfolio Website</strong> – Built with React and CSS modules, fully responsive.<br />
          <a href="https://exquisite-croissant-045c01.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Portfolio Website
          </a>
        </li>
        <li>
          <strong>Whip'd Cookies</strong> – An e-commerce website.<br />
          <a href="https://whipd-cookies.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Whip'd Cookies
          </a>
          <p>(currently working on the Whip'd Cookies project)</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
