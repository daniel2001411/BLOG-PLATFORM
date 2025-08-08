package com.example.BlogPlatform.repository;

import com.example.BlogPlatform.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}