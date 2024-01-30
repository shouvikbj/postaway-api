// Import required packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Import route files
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';

import { errorHandler } from './middleware/errorHandling.js';
import { logger } from './middleware/logger.js';
import {authenticateUser} from "./middleware/authentication.js"

// Create an instance of Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // Log HTTP requests to the console
app.use(helmet()); // Add security headers to HTTP responses
// Use logger middleware for all routes
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Postaway API');
});

// User routes
app.use('/api/user', userRoutes);

// Post routes
app.use('/api/posts', authenticateUser, postRoutes);

// Comment routes
app.use('/api/comments', authenticateUser, commentRoutes);

// Like routes
app.use('/api/likes', authenticateUser, likeRoutes);

// Register the error handling middleware
app.use(errorHandler);

// Set up server
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
