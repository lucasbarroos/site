import React from 'react';
import {
  Container,
  UL,
  LI,
  ULFloating,
  LIFloating,
} from './styles';


export default function Navigation() {
  const [showTopHeader, setShowTopHeader] = React.useState(true);

  window.onscroll = () => {
    setShowTopHeader(window.pageYOffset <= 400);
  };

  return (
    <Container>
      <UL showTopHeader={showTopHeader}>
        <LI>Home</LI>
        <LI>About</LI>
        <LI>Technologies</LI>
        <LI>Blog</LI>
        <LI>Certificates</LI>
        <LI>Contact</LI>
      </UL>
      <ULFloating showTopFloatingHeader={!showTopHeader}>
        <LIFloating>Home</LIFloating>
        <LIFloating>About</LIFloating>
        <LIFloating>Technologies</LIFloating>
        <LIFloating>Blog</LIFloating>
        <LIFloating>Certificates</LIFloating>
        <LIFloating>Contact</LIFloating>
      </ULFloating>
    </Container>
  );
}
