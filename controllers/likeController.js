// controllers/likeController.js

import * as Like from '../models/Like.js';
import {getAllUsers} from "../models/User.js";
import {getAllPosts} from "../models/Post.js";

// Function to add a like
export const addLike = (req, res) => {
    const { userId, postId } = req.body;
    const user = getAllUsers().find(u => u.id === userId);
    if(!user){
        throw new Error("User not found");
    }
    const post = getAllPosts().find(p => p.id === postId)
    if(!post){
        throw new Error("Post not found");
    }
    const newLike = Like.addLike(userId, postId);
    res.status(201).json({ message: 'Like added successfully', like: newLike });
};

// Function to remove a like
export const removeLike = (req, res) => {
    const likeId = parseInt(req.params.id);
    const isRemoved = Like.removeLike(likeId);
    if (isRemoved) {
        res.status(200).json({ message: 'Like removed successfully' });
    } else {
        res.status(404).json({ message: 'Like not found' });
    }
};

// Function to get all likes for a specific post
export const getAllLikesForPost = (req, res) => {
    const postId = parseInt(req.query.postId);
    const postLikes = Like.getAllLikesForPost(postId);
    res.status(200).json(postLikes);
};
