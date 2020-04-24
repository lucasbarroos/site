import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import moment from 'moment';
import {
  Container,
  Post,
  PostImage,
  PostTitle,
  PostDescription,
  PostDate,
  NewIcon,
} from './styles';

export default function BlogPosts({ posts }) {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        { posts.map((el) => (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Post>
              <NewIcon>New</NewIcon>
              <PostImage style={{ backgroundImage: `url(${el.image})` }} />
              <PostTitle>{el.title}</PostTitle>
              <PostDescription>
                {el.description}
              </PostDescription>
              <PostDate>{moment(el.date).format('DD MMM YYYY')}</PostDate>
              <Button variant="contained" color="secondary" style={{ marginBottom: 10 }}>
                <Link to={`/blog/${123}`}>Read more</Link>
              </Button>
            </Post>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
