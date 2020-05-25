import React from 'react';
import { Grid } from '@material-ui/core';
import GithubIcon from '../../assets/images/github.png';
import LinkedinIcon from '../../assets/images/linkedin.png';
import {
  Container,
  Title,
  Text,
  Form,
  FormTitle,
  SocialMediaForm,
  SocialMedia,
  SocialMediaIcon,
} from './styles';


export default function Contact() {
  return (
    <Container id="contact" name="contact">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Title>Contact me</Title>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Text>Let's talk about your project. </Text>
          <Text>We can develop your idea. </Text>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} style={{ padding: 20 }}>
          <Form>
            <FormTitle>Social Medias</FormTitle>
            <SocialMediaForm>
              <SocialMedia>
                <SocialMediaIcon src={GithubIcon} />
                <a href="https://github.com/lucasbarroos" target="blank">Github</a>
              </SocialMedia>
              <SocialMedia>
                <SocialMediaIcon src={LinkedinIcon} />
                <a href="https://www.linkedin.com/in/lucasbarrosdev" target="blank">Linkedin</a>
              </SocialMedia>
            </SocialMediaForm>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}
