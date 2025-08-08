import React, { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import api from '../services/api';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
            <Button variant="primary" href={`/post/${post.id}`}>
              Read More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}