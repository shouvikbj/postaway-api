// controllers/postController.js

import * as Post from '../models/Post.js';
import { getAllUsers } from '../models/User.js';

// Function to create a new post
export const createPost = (req, res) => {
    const { userId, caption, imageUrl } = req.body;
    const user = getAllUsers().find(u=> u.id === userId);
    if(!user){
        throw new Error("User not found");
    }
    const newPost = Post.createPost(userId, caption, imageUrl);
    res.status(201).json({ message: 'Post created successfully', post: newPost });
};

// Function to get all posts
export const getAllPosts = (req, res) => {
    const allPosts = Post.getAllPosts();
    res.status(200).json(allPosts);
};

// Function to get post by ID
export const getPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = Post.getPostById(postId);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

// Function to update a post
export const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const { caption, imageUrl } = req.body;
    const updatedPost = Post.updatePost(postId, caption, imageUrl);
    if (updatedPost) {
        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

// Function to delete a post
export const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const isDeleted = Post.deletePost(postId);
    if (isDeleted) {
        res.status(200).json({ message: 'Post deleted successfully' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};
