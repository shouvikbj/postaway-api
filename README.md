# Postaway Social Media API

Postaway is a social media platform API built using Express.js, designed to enable users to perform various social networking activities such as registration, authentication, post creation, commenting, liking, and more.

## Features

- **User Management**: Register and authenticate users.
- **Post Creation**: Users can create posts with text and media.
- **Commenting**: Users can comment on posts.
- **Liking**: Users can like posts.
- **File Upload**: Supports file upload for user avatars and post images.
- **Error Handling**: Graceful handling of errors with appropriate HTTP status codes and error messages.
- **Authentication**: Implements JSON Web Tokens (JWT) for user authentication.
- **Security**: Ensures security measures like data validation and input sanitization.
- **Scalable Architecture**: Uses Express.js for a scalable and modular architecture.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/shouvikbj/postaway-api.git
    cd postaway-api
    ```

2. Install dependencies:
    **npm install**

3. Set up environment variables:

    - Create a `.env` file in the root directory with the following variables:
        - **PORT**=3200
        - **JWT_SECRET**=your_jwt_secret_key_here

4. Start the server:
    **npm start**

## API Endpoints

### User Routes

- **POST /api/user/register**: Register a new user account.
- **POST /api/user/login**: Log in as a user.
- **POST /api/user/upload-avatar**: Upload user avatar.

### Post Routes

- **POST /api/posts**: Create a new post.
- **POST /api/posts/upload-image**: Upload post image.
- **GET /api/posts**: Retrieve all posts.
- **GET /api/posts/:id**: Retrieve a specific post by ID.
- **PUT /api/posts/:id**: Update a specific post by ID.
- **DELETE /api/posts/:id**: Delete a specific post by ID.

### Comment Routes

- **POST /api/comments**: Create a new comment.
- **GET /api/comments**: Retrieve all comments for a specific post.
- **PUT /api/comments/:id**: Update a specific comment by ID.
- **DELETE /api/comments/:id**: Delete a specific comment by ID.

### Like Routes

- **POST /api/likes**: Add a like to a post.
- **DELETE /api/likes/:id**: Remove a like from a post.
- **GET /api/likes/:postId**: Retrieve all likes for a specific post.

## Technologies Used

- Express.js
- JSON Web Tokens (JWT)
- bcryptjs
- Multer
- Morgan
- Helmet

## Contributing

Contributions to the Postaway API are welcome! Feel free to fork the repository, make improvements, and submit pull requests for new features or bug fixes.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

---

Feel free to customize this README file according to your project's specific details and requirements.
