package com.example.BlogPlatform.controller;

import com.example.BlogPlatform.model.Post;
import com.example.BlogPlatform.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) {
        Post post = postRepository.findById(id).orElseThrow();
        post.getComments().size();
        return post;
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        post.setCreatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }
}
