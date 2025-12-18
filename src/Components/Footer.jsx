import "./Footer.css";
import { FaGithub, FaBookOpen, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <FaBookOpen className="footer-logo" />
          <span className="footer-title">Book Library</span>
        </div>

        <p className="footer-text">
          A simple book browsing app built with React.
        </p>

        <div className="footer-right">
          <a
            href="https://github.com/chaitali9497/book-library"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Book Library · Built with{" "}
          <FaHeart className="heart" /> by Chaitali
        </span>
      </div>
    </footer>
  );
}

export default Footer;
