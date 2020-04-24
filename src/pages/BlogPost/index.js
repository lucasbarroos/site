import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
  Container,
  PostTitle,
  PostImage,
  PostText,
} from './styles';
import BlogHeader from '../../components/BlogHeader/index';
import { apiUrl } from '../../utils/consts';

export default function BlogPost() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [post, setPost] = useState({
    title: '',
    description: '',
    text: '',
    date: new Date(),
    image: '',
  });
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await fetch(`${apiUrl}/post/${id}`);
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };

  useEffect(() => loadData(), []);

  return (
    <Container>
      <BlogHeader />
      {
        loading ? null
          : (
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
          )
      }
    </Container>
  );
}
