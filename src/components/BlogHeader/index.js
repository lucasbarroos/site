import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  BlogTitle,
  BlogMenu,
  BlogMenuItem,
} from './styles';

export default function BlogHeader() {
  return (
    <Container>
      <BlogTitle><Link to="/">Lucas Barros - Blog</Link></BlogTitle>
      <BlogMenu>
        <BlogMenuItem>ReactJs</BlogMenuItem>
        <BlogMenuItem>React Native</BlogMenuItem>
        <BlogMenuItem>NodeJs</BlogMenuItem>
        <BlogMenuItem>Mongodb</BlogMenuItem>
      </BlogMenu>
    </Container>
  );
}
