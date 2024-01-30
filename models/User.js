// models/User.js

// Dummy user data (for in-memory operations)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password2' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com', password: 'password3' }
];

// Function to register a new user
export const registerUser = (name, email, password) => {
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return null; // User already exists
    }
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    return newUser;
};

// Function to log in a user
export const loginUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    return user ? user : null; // Return user if found, otherwise return null
};

// Function to return all the users
export const getAllUsers = () => {
    return users;
}