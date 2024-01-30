// controllers/userController.js

import * as User from '../models/User.js';
import { generateToken } from '../utils/jwtUtils.js';

// Function to register a new user
export const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    const newUser = User.registerUser(name, email, password);
    if (newUser) {
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } else {
        res.status(400).json({ message: 'User already exists' });
    }
};

// Function to log in a user
export const loginUser = (req, res) => {
    const { email, password } = req.body;
    const user = User.loginUser(email, password);
    if (user) {
        const token = generateToken({email, password});
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
