import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import {
  Container,
  Title,
  Text,
  Form,
  FormTitle,
} from './styles';

const inputStyle = {
  width: '100%',
  marginTop: 10,
  marginBottom: 10,
};

export default function Contact() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={12}>
          <Title>Contact me</Title>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Text>We can talk about your project or idea. </Text>
          <Text>We can develop your best idea! </Text>
        </Grid>
        <Grid item lg={6} xs={12} style={{ padding: 20 }}>
          <Form>
            <FormTitle>Send a Message</FormTitle>
            <TextField id="standard-basic" label="Your name" style={inputStyle} />
            <TextField id="standard-basic" label="Your email" style={inputStyle} />
            <TextField id="standard-basic" multiline rows={3} label="Your message" style={inputStyle} />
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}
