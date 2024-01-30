// models/Post.js

// Dummy post data (for in-memory operations)
let posts = [
    { id: 1, userId: 1, caption: 'First post', imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, userId: 2, caption: 'Second post', imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, userId: 3, caption: 'Third post', imageUrl: 'https://example.com/image3.jpg' }
];

// Function to create a new post
export const createPost = (userId, caption, imageUrl) => {
    const newPost = { id: posts.length + 1, userId, caption, imageUrl };
    posts.push(newPost);
    return newPost;
};

// Function to get all posts
export const getAllPosts = () => {
    return posts;
};

// Function to get post by ID
export const getPostById = (postId) => {
    return posts.find(post => post.id === postId);
};

// Function to update a post
export const updatePost = (postId, caption, imageUrl) => {
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], caption, imageUrl };
        return posts[postIndex];
    }
    return null;
};

// Function to delete a post
export const deletePost = (postId) => {
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        return true;
    }
    return false;
};
