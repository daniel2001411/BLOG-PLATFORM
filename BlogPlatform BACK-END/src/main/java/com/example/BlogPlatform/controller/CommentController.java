package com.example.BlogPlatform.controller;

import com.example.BlogPlatform.model.Comment;
import com.example.BlogPlatform.model.Post;
import com.example.BlogPlatform.repository.CommentRepository;
import com.example.BlogPlatform.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts/{postId}/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public List<Comment> getCommentsByPostId(@PathVariable Long postId) {
        return commentRepository.findByPostId(postId);
    }

    @PostMapping
    public Comment addComment(@PathVariable Long postId, @RequestBody Comment comment) {
        Post post = postRepository.findById(postId).orElseThrow();
        comment.setPost(post);
        return commentRepository.save(comment);
    }
}
