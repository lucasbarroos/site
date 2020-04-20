import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  AboutContainer,
  AboutTitle,
  AboutComponents,
  AboutIcon,
  AboutText,
  Picture,
} from './styles';

const schoolIcon = require('../../assets/images/school.png');
const workIcon = require('../../assets/images/monitor.png');

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>Who I am</AboutTitle>
      <AboutComponents>
        <Grid container justify="center" spacing={12}>
          <Grid item justify="center" lg={3} xs={12}>
            <AboutText>
              <AboutIcon src={schoolIcon} />
              {' '}
              I'm a Computer Engineer Student at Federal University of the Vale do Sao Francisco (UNIVASF) and System Analysis and Development at UNIP.
              I study English at MDS Idioms for about 1 year.
            </AboutText>
          </Grid>
          <Grid item justify="center" lg={3} xs={12}>
            <AboutText>
              <AboutIcon src={workIcon} />
              {' '}
              I work with Web Development for about 7 years, using JS as the main stack.
              I have 6 years of working at Criatech Solutions (https://criatech.me) as a Full-stack Developer.
            </AboutText>
          </Grid>
          <Grid item justify="center" lg={3} xs={12}>
            <Picture />
          </Grid>
        </Grid>
      </AboutComponents>
    </AboutContainer>
  );
}
