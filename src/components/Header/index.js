import React from 'react';
import Button from '@material-ui/core/Button';
import {
  HeaderContainer,
  HeaderElements,
  HeaderBlur,
  HeaderTitle,
  HeaderSubtitle,
  Picture,
  PictureContainer,
  ButtonContainer,
} from './styles';

const buttonActionStyle = {
  margin: 15,
  fontSize: 20,
  fontWeight: 400,
  letterSpacing: 1,
};

export default function Header() {
  return (
    <HeaderContainer id="home" name="home">
      <HeaderBlur />
      <HeaderElements>
        <HeaderTitle>Lucas Barros</HeaderTitle>
        <HeaderSubtitle>Pleno Full-stack Developer</HeaderSubtitle>
        <ButtonContainer>
          <Button size="large" color="secondary" style={buttonActionStyle}>
            Let's look to the FUTURE
          </Button>
        </ButtonContainer>
        <PictureContainer />
        <Picture />
      </HeaderElements>
    </HeaderContainer>
  );
}
