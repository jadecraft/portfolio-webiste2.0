import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
     <footer style={styles.footer}>
      <div style={styles.socials}>
        <a
          href="https://github.com/jadecraft"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/jade-craft"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
    );
};

const styles = {
  footer: {
    backgroundColor: '#7e7a7a',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  socials: {
    marginBottom: '10px',
  },
  iconLink: {
    margin: '0 12px',
    color: 'white',
    fontSize: '50px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  copy: {
    fontSize: '14px',
  },
};

export default Footer;
