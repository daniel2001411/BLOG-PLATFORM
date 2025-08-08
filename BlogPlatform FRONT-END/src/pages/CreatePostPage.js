import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/posts', { title, content, author: "Admin" });
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h1>Create New Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </Container>
  );
}