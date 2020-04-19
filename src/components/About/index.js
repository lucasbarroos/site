import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  AboutContainer, AboutTitle, AboutComponents, AboutText, Picture,
} from './styles';

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>Who I am</AboutTitle>
      <AboutComponents>
        <Grid container justify="center" spacing={12}>
          <Grid item justify="center" lg={9} xs={12}>
            <AboutText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</AboutText>
          </Grid>
          <Grid item justify="center" lg={3} xs={12}>
            <Picture />
          </Grid>
        </Grid>
      </AboutComponents>
    </AboutContainer>
  );
}
