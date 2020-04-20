import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from './styles';
import ProgressBar from '../ProgressBar/index';

export default function Technologies() {
  return (
    <Container>
      <Grid container size={12}>
        <Grid lg={3} xs={12} />
        <Grid lg={6} xs={12}>
          <ProgressBar progress={95} />
        </Grid>
        <Grid lg={3} xs={12} />
      </Grid>
    </Container>
  );
}
