import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import {
  Container,
  Title,
  Text,
  Form,
  FormTitle,
  Icon,
} from './styles';
import MessageIcon from '../../assets/images/speak.png';

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
          <Text><Icon src={MessageIcon} /></Text>
          <Text>Let's talk about your project. </Text>
          <Text>We can develop your idea. </Text>
          <Text>We can realize your dreams! </Text>
        </Grid>
        <Grid item lg={6} xs={12} style={{ padding: 20 }}>
          <Form>
            <FormTitle>Send a Message</FormTitle>
            <TextField id="standard-basic" label="Your name" style={inputStyle} />
            <TextField id="standard-basic" label="Your email" style={inputStyle} />
            <TextField id="standard-basic" multiline rows={3} label="Your message" style={inputStyle} />
            <Button variant="contained" color="primary" style={inputStyle}>
              Send
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}
