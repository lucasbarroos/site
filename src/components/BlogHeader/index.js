import React from 'react';
import {
  Container,
  BlogTitle,
  BlogMenu,
  BlogMenuItem,
} from './styles';

export default function BlogHeader() {
  return (
    <Container>
      <BlogTitle>Lucas Barros - Blog</BlogTitle>
      <BlogMenu>
        <BlogMenuItem>ReactJs</BlogMenuItem>
        <BlogMenuItem>React Native</BlogMenuItem>
        <BlogMenuItem>NodeJs</BlogMenuItem>
        <BlogMenuItem>Mongodb</BlogMenuItem>
      </BlogMenu>
    </Container>
  );
}
