// controllers/commentController.js

import * as Comment from '../models/Comment.js';
import {getAllUsers} from "../models/User.js";
import {getAllPosts} from "../models/Post.js";

// Function to create a new comment
export const createComment = (req, res) => {
    const { userId, postId, content } = req.body;
    const user = getAllUsers().find(u => u.id === userId);
    if(!user){
        throw new Error("User not found");
    }
    const post = getAllPosts().find(p => p.id === postId)
    if(!post){
        throw new Error("Post not found");
    }
    const newComment = Comment.createComment(userId, postId, content);
    res.status(201).json({ message: 'Comment created successfully', comment: newComment });
};

// Function to get all comments for a specific post
export const getAllCommentsForPost = (req, res) => {
    const postId = parseInt(req.query.postId);
    const post = getAllPosts().find(p => p.id === postId)
    if(!post){
        throw new Error("Post not found");
    }
    const postComments = Comment.getAllCommentsForPost(postId);
    res.status(200).json(postComments);
};

// Function to update a comment
export const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const { content } = req.body;
    const updatedComment = Comment.updateComment(commentId, content);
    if (updatedComment) {
        res.status(200).json({ message: 'Comment updated successfully', comment: updatedComment });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

// Function to delete a comment
export const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const isDeleted = Comment.deleteComment(commentId);
    if (isDeleted) {
        res.status(200).json({ message: 'Comment deleted successfully' });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};
