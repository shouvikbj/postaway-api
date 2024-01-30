// middleware/errorHandling.js

// Error handling middleware function
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Log the error for debugging purposes
    console.error(err);

    // Send error response to the client
    res.status(statusCode).json({ message });
};
