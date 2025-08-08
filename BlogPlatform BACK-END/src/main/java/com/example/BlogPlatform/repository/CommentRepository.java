package com.example.BlogPlatform.repository;


import com.example.BlogPlatform.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Add this method to find comments by post ID
    List<Comment> findByPostId(Long postId);
}
