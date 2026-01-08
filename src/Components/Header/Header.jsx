import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { Logo, LogoText } from '../../assets/Images/Images';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Comman/Button';
import { ConstantText } from '../../Utils/Constant';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust scroll value if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={isScrolled ? 'header header-scrolled' : 'header '} >
      <div className="container">
        <div className="header-inner " data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">

          <div className="header-logo">
            <Link to="/">
              <img src={Logo} alt="website-logo" />
              <img src={LogoText} alt="website-logo" />
            </Link>
          </div>

          <Navbar expand="lg" className="header-left p-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto header-menu">
                <Nav.Link as={NavLink} to="/" end>
                  {ConstantText.Home}
                </Nav.Link>

                <Nav.Link as={NavLink} to="/industries">
                  {ConstantText.Industries}
                </Nav.Link>

                <Nav.Link as={NavLink} to="/products">
                  {ConstantText.Products}
                </Nav.Link>

                <Nav.Link as={NavLink} to="/blog">
                  {ConstantText.Blog}
                </Nav.Link>

                <Nav.Link as={NavLink} to="/contact-us">
                  {ConstantText.ContactUs}
                </Nav.Link>

                <Nav.Link as={NavLink} to="/about-us">
                  {ConstantText.AboutUs}
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          <div className="header-btn">
            <Button
              url="/get-demo"
              btnText={ConstantText.GetDemo}
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
