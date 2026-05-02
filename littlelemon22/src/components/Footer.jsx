import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/LemonLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="maxWidth-footer" role="contentinfo">
      <div className="super-container-footer">
        <div className="grid-container-footer">
          <div className="MenuBox">
            <img 
              src="./src/assets/images/Footer-Logo-small2.png" 
              className="img-fluid" 
              alt="Little Lemon Logo" 
              width="200" 
            />
          </div>

          <nav className="MenuBox" aria-label="Footer Navigation">
            <p><strong>Navigation</strong></p>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#specials">Menu</Nav.Link>
            <Nav.Link href="/reservation">Reservation</Nav.Link>
            <Nav.Link href="/#specials">Order Online</Nav.Link>
          </nav>

          <nav className="MenuBox" aria-label="Contact Information">
            <p><strong>Contact</strong></p>
            <address>
              <p>69 Vico Araratiano<br/>(709) 879-4459</p>
              <a href="mailto:contact@littlelemon.com">Email Us</a>
            </address>
          </nav>

          <nav className="MenuBox" aria-label="Social Media">
            <p><strong>Social Media</strong></p>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" /> Facebook
            </Nav.Link>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" /> Instagram
            </Nav.Link>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" /> Twitter
            </Nav.Link>
          </nav>
        </div>
        <hr aria-hidden="true" />
        <p className="text-center">2026 © Little Lemon</p>
      </div>
    </footer>
  );
}


export default Footer;

