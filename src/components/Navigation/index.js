import React from 'react';
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

export default function Navigation() {
  const [showTopHeader, setShowTopHeader] = React.useState(true);
  const [responsiveMode, setResponsiveMode] = React.useState(true);

  window.onscroll = () => {
    setShowTopHeader(window.pageYOffset <= 400);
  };

  React.useEffect(() => {
    setResponsiveMode(window.outerWidth < 768);
  }, []);

  return (
    <Container>
      <UL showTopHeader={showTopHeader && !responsiveMode}>
        <LI>Home</LI>
        <LI>About</LI>
        <LI>Technologies</LI>
        <LI>Blog</LI>
        <LI>Contact</LI>
      </UL>
      <ULFloating showTopFloatingHeader={!showTopHeader && !responsiveMode}>
        <LIFloating>Home</LIFloating>
        <LIFloating>About</LIFloating>
        <LIFloating>Technologies</LIFloating>
        <LIFloating>Blog</LIFloating>
        <LIFloating>Contact</LIFloating>
      </ULFloating>
      <ResponsiveToggle showResponsiveMode={responsiveMode}>
        <ResponsiveImage src={ToggleButton} />
      </ResponsiveToggle>
    </Container>
  );
}
