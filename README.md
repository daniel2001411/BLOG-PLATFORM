Blog Platform
A full-stack blog platform that allows users to create blog posts and add comments. This application features a Spring Boot backend providing RESTful APIs and a React frontend for user interaction.

Table of Contents
* Features
* Tech Stack
* Architecture
* Getting Started
o Prerequisites
o Backend Setup
o Frontend Setup
* API Endpoints
* Project Structure
* Database Schema
* Design Patterns
* Potential Enhancements
* License

Features
* View all blog posts
* Create new blog posts
* View individual post details with comments
* Add comments to posts
* Responsive design with Bootstrap

Tech Stack
Backend
* Java 21
* Spring Boot 3.5.4
* Spring Data JPA
* MySQL
* Maven
Frontend
* React
* React Router DOM
* React Bootstrap
* Axios

Architecture
1. Client (React) calls the REST API endpoints.
2. Server (Spring Boot) handles requests, performs business logic, and interacts with the database.
3. Database (MySQL) stores posts and comments.

Getting Started
Prerequisites
* Java 21
* Maven
* Node.js (v14+) & npm
* MySQL
Backend Setup
1. Clone the repository and navigate to the backend folder:
git clone https://github.com/yourusername/blog-platform.git
cd blog-platform/backend

2. Configure database settings in src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/blog_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

3. Build and run the Spring Boot application:
mvn clean install
mvn spring-boot:run

The backend will start on http://localhost:8080.
Frontend Setup
1. Navigate to the frontend folder:
cd ../frontend

2. Install dependencies and start the React development server:
npm install
npm start

The frontend will start on http://localhost:3000 and proxy API calls to the backend.

API Endpoints
Method
Endpoint
Description
GET
/api/posts
List all posts
POST
/api/posts
Create a new post
GET
/api/posts/{id}
Get a post by ID (with comments)
GET
/api/posts/{postId}/comments
List comments for a specific post
POST
/api/posts/{postId}/comments
Add a comment to a specific post

Project Structure
backend/
??? src/
    ??? main/
        ??? java/com/example/BlogPlatform/
            ??? BlogPlatformApplication.java
            ??? controller/
            ?   ??? PostController.java
            ?   ??? CommentController.java
            ??? model/
            ?   ??? Post.java
            ?   ??? Comment.java
            ??? repository/
                ??? PostRepository.java
                ??? CommentRepository.java

frontend/
??? src/
    ??? App.js
    ??? index.js
    ??? components/
    ?   ??? Navbar.js
    ??? pages/
    ?   ??? HomePage.js
    ?   ??? CreatePostPage.js
    ?   ??? PostDetailPage.js
    ??? services/
        ??? api.js


Database Schema
Posts
* id (PK, Auto-increment)
* title (VARCHAR)
* author (VARCHAR)
* content (TEXT)
* created_at (DATETIME)
Comments
* id (PK, Auto-increment)
* author (VARCHAR)
* content (VARCHAR)
* post_id (FK ? posts.id)

Design Patterns
* Repository Pattern: Separates data access logic in Spring Data JPA repositories.
* Entity-Relationship Mapping: JPA annotations define relationships between Post and Comment.
* RESTful API Design: Standard HTTP methods and status codes.
* Dependency Injection: Spring manages component dependencies.
* Component-Based Architecture: React components for UI.
* Controlled Components: React state manages form inputs.

Potential Enhancements
* Add user authentication and authorization
* Implement pagination for large datasets
* Add input validation and error handling
* Include unit and integration tests
* Integrate a rich text editor for post content
* Implement search and filtering functionality

License
This project is licensed under the MIT License. See the LICENSE file for details.

