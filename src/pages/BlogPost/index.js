import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
  Container,
  PostTitle,
  PostImage,
  PostText,
} from './styles';
import BlogHeader from '../../components/BlogHeader/index';

const post = {
  title: 'Newest for the NodeJS BETA Version',
  description: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
  text: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
  image: 'data:image/png;base64,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',
  date: new Date(),
};

export default function BlogPost() {
  const { id } = useParams();
  window.scrollTo(0, 0);

  return (
    <Container>
      <BlogHeader />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <PostTitle>
            {post.title}
          </PostTitle>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <PostImage src={post.image} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <PostText dangerouslySetInnerHTML={{ __html: post.text }} />
        </Grid>
      </Grid>
    </Container>
  );
}
