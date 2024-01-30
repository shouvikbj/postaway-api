// routes/postRoutes.js

import express from 'express';
const router = express.Router();

// Import post controller
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/postController.js';
import { fileUpload } from '../middleware/fileUpload.js';

// Create a new post
router.post('/', createPost);

// POST /api/posts/upload-image - Upload post image
router.post('/upload-image', fileUpload, (req, res) => {
    // Access uploaded file details via req.file
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    // Handle file upload success
    res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
});

// Get all posts
router.get('/', getAllPosts);

// Get post by ID
router.get('/:id', getPostById);

// Update a post
router.put('/:id', updatePost);

// Delete a post
router.delete('/:id', deletePost);

export default router;
