import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Title, Table } from './styles';
import ProgressBar from '../ProgressBar/index';

export default function Technologies() {
  return (
    <Container>
      <Title>Technologies</Title>
      <Table>
        <Grid container>
          <Grid lg={12} xs={12}>
            <ProgressBar title="HTML" progress={99} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="CSS" progress={98} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="JS" progress={95} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="ReactJS" progress={98} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="NodeJS" progress={99} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="MongoDB" progress={95} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="React Native" progress={90} />
          </Grid>
          <Grid lg={12} xs={12}>
            <ProgressBar title="PostgreSQL" progress={85} />
          </Grid>
        </Grid>
      </Table>
    </Container>
  );
}
