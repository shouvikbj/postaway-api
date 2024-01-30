// routes/userRoutes.js

import express from 'express';
const router = express.Router();

// Import user controller
import { registerUser, loginUser } from '../controllers/userController.js';
import { fileUpload } from "../middleware/fileUpload.js"

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// POST /api/users/upload-avatar - Upload user avatar
router.post('/upload-avatar', fileUpload, (req, res) => {
    // Access uploaded file details via req.file
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    // Handle file upload success
    res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
});

export default router;
