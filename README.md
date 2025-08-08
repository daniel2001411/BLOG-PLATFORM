# Blog Platform

A full-stack web application that allows users to create, view, and comment on blog posts. Built with a modern tech stack featuring a Spring Boot backend and a React frontend.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Architecture & Project Structure](#architecture--project-structure)  
- [API Endpoints](#api-endpoints)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Potential Enhancements](#potential-enhancements)  
- [License](#license)  

---

## Project Overview

This Blog Platform demonstrates a complete full-stack web application using modern technologies.

- **Backend:** RESTful API developed with Spring Boot and MySQL database.  
- **Frontend:** React application with responsive UI using React Bootstrap.  
- **Functionality:** Users can view all posts, create new posts, view post details with comments, and add comments to posts.

---

## Tech Stack

**Backend:**  
- Java 21  
- Spring Boot 3.5.4  
- Spring Data JPA  
- MySQL  
- Maven  

**Frontend:**  
- React  
- React Router DOM  
- React Bootstrap  
- Axios  

---

## Features

- View all blog posts on the homepage  
- Create new blog posts with title and content  
- View details of individual posts along with all associated comments  
- Add comments to posts  
- Responsive design ensuring mobile compatibility  
- RESTful API adhering to standard HTTP conventions  

---

## Architecture & Project Structure

### Backend (Spring Boot)


src/main/java/com/example/BlogPlatform/
├── BlogPlatformApplication.java # Main class to bootstrap application
├── controller/
│ ├── PostController.java # Handles post-related REST endpoints
│ └── CommentController.java # Handles comment-related REST endpoints
├── model/
│ ├── Post.java # Post entity model
│ └── Comment.java # Comment entity model
└── repository/
├── PostRepository.java # Data access for posts
└── CommentRepository.java # Data access for comments

### Frontend (React)


src/
├── App.js # Main React component with routing
├── index.js # React app entry point
├── components/
│ └── Navbar.js # Navigation bar component
├── pages/
│ ├── HomePage.js # Displays list of posts
│ ├── CreatePostPage.js # Form to create new post
│ └── PostDetailPage.js # Shows post details and comments
└── services/
└── api.js # Axios configuration and API client

---

## API Endpoints

| Method | Endpoint                     | Description                 |
|--------|------------------------------|-----------------------------|
| GET    | `/api/posts`                  | Retrieve all blog posts     |
| GET    | `/api/posts/{id}`             | Get a specific post with comments |
| POST   | `/api/posts`                  | Create a new blog post      |
| GET    | `/api/posts/{postId}/comments` | Retrieve comments for a post |
| POST   | `/api/posts/{postId}/comments` | Add a comment to a post     |

---

## Setup & Installation

### Backend

1. Ensure you have Java 21 and MySQL installed.
2. Create a MySQL database for the application.
3. Configure `application.properties` or `application.yml` with your MySQL credentials and database URL.
4. Build and run the Spring Boot application:

mvn clean install
mvn spring-boot:run
5. The backend server will start on [http://localhost:8080](http://localhost:8080).

### Frontend

1. Navigate to the `src` folder (or root React app directory).
2. Install dependencies:

npm install
3. Start the React development server:

npm start
4. The frontend will run on [http://localhost:3000](http://localhost:3000) and communicate with the backend API.

---

## Usage

- Visit the homepage to see the latest blog posts.
- Use the navigation bar to create a new post.
- Click "Read More" on a post card to view full details and comments.
- Add comments to posts on the post detail page.

---

## Potential Enhancements

- Add user authentication and authorization.
- Implement pagination for large datasets.
- Add comprehensive input validation and error handling.
- Include unit and integration tests.
- Add rich text editing capability for post content.
- Implement search and filtering functionality.

---

## License

This project is open source and available under the MIT License.

---

**Developed with ❤️ using Spring Boot and React**



