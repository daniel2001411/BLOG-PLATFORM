import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Form, Button, Container } from 'react-bootstrap';
import api from '../services/api';

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => {
      setPost(response.data);
    });
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/posts/${id}/comments`, {
      content: comment,
      author: "User"
    });
    setComment('');
    // Refresh post data
    const updatedPost = await api.get(`/posts/${id}`);
    setPost(updatedPost.data);
  };

  if (!post) return <Container>Loading...</Container>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Footer>
            <small className="text-muted">
              Posted by {post.author} on {new Date(post.createdAt).toLocaleDateString()}
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>

      <h3 className="mt-4">Comments</h3>
      {post.comments && post.comments.map(c => (
        <Card key={c.id} className="mb-2">
          <Card.Body>
            <Card.Text>{c.content}</Card.Text>
            <Card.Subtitle className="text-muted">- {c.author}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}

      <Form onSubmit={handleCommentSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Add Comment
        </Button>
      </Form>
    </Container>
  );
}