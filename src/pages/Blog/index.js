import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import BlogHeader from '../../components/BlogHeader/index';
import BlogPosts from '../../components/BlogPosts/index';
import { apiUrl } from '../../utils/consts';

export default function Blog() {
  window.scrollTo(0, 0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await fetch(`${apiUrl}/posts/1`);
    const { data } = await response.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [posts]);

  return (
    <Container>
      <BlogHeader />
      { loading ? null : <BlogPosts posts={posts} /> }
    </Container>
  );
}
