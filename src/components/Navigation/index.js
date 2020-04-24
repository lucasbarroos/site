import React from 'react';
import { Link } from 'react-scroll';
import {
  Container,
  UL,
  LI,
  ULFloating,
  LIFloating,
  ResponsiveToggle,
  ResponsiveImage,
} from './styles';
import ToggleButton from '../../assets/images/bullets.png';
import ResponsiveNavigation from '../ResponiveNavigation/index';

export default function Navigation() {
  const [showTopHeader, setShowTopHeader] = React.useState(true);
  const [responsiveMode, setResponsiveMode] = React.useState(true);
  const [showResponsiveNavigation, setShowResponsiveNavigation] = React.useState(false);
  window.onscroll = () => {
    setShowTopHeader(window.pageYOffset <= 400);
  };

  React.useEffect(() => {
    setResponsiveMode(window.outerWidth < 768);
  }, []);

  return (
    <Container>
      <UL showTopHeader={showTopHeader && !responsiveMode}>
        <LI>
          <Link activeClass="active" to="home" spy smooth offset={0} duration={500}>
            Home
          </Link>
        </LI>
        <LI>
          <Link activeClass="active" to="about" spy smooth offset={0} duration={500}>
            About
          </Link>
        </LI>
        <LI>
          <Link activeClass="active" to="recent_posts" spy smooth offset={0} duration={500}>
            Blog
          </Link>
        </LI>
        <LI>
          <Link activeClass="active" to="contact" spy smooth offset={0} duration={500}>
            Contact
          </Link>
        </LI>
      </UL>
      <ULFloating showTopFloatingHeader={!showTopHeader && !responsiveMode}>
        <LIFloating>
          <Link activeClass="active" to="home" spy smooth offset={0} duration={500}>
            Home
          </Link>
        </LIFloating>
        <LIFloating>
          <Link activeClass="active" to="about" spy smooth offset={0} duration={500}>
            About
          </Link>
        </LIFloating>
        <LIFloating>
          <Link activeClass="active" to="recent_posts" spy smooth offset={0} duration={500}>
            Blog
          </Link>
        </LIFloating>
        <LIFloating>
          <Link activeClass="active" to="contact" spy smooth offset={0} duration={500}>
            Contact
          </Link>
        </LIFloating>
      </ULFloating>
      <ResponsiveToggle showResponsiveMode={responsiveMode}>
        <ResponsiveImage src={ToggleButton} onClick={() => setShowResponsiveNavigation(!showResponsiveNavigation)} />
      </ResponsiveToggle>
      <ResponsiveNavigation show={showResponsiveNavigation} hideNavigation={setShowResponsiveNavigation} />
    </Container>
  );
}
