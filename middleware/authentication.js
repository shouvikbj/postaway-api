// middleware/authentication.js

import { verifyToken } from '../utils/jwtUtils.js';
import CustomError from '../utils/customError.js';

// Middleware function to verify JWT token and authenticate users
export const authenticateUser = (req, res, next) => {
    // Extract the token from the request header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return next(new CustomError(401, 'Access denied. No token provided.'));
    }

    try {
        // Verify the token with the secret key
        const decoded = verifyToken(token);
        if (!decoded) {
            return next(new CustomError(401, 'Invalid token.'));
        }
        // Attach the decoded user information to the request object
        req.user = decoded;
        next(); // Move to the next middleware
    } catch (error) {
        return next(new CustomError(500, 'Internal Server Error'));
    }
};
