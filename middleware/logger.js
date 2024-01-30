// middleware/logger.js

import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

// Create logger instance with file transport
export const logger = createLogger({
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.File({ filename: 'logs.txt' }) // Log to logs.txt file
    ]
});
