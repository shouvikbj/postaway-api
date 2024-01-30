// routes/likeRoutes.js

import express from 'express';
const router = express.Router();

// Import like controller
import { addLike, removeLike, getAllLikesForPost } from '../controllers/likeController.js';

// Add a like
router.post('/', addLike);

// Remove a like
router.delete('/:id', removeLike);

// Get all likes
router.get('/', getAllLikesForPost);

export default router;
