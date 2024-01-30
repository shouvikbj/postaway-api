// models/Like.js

// Dummy like data (for in-memory operations)
let likes = [
    { id: 1, userId: 1, postId: 1 },
    { id: 2, userId: 2, postId: 1 },
    { id: 3, userId: 3, postId: 2 }
];

// Function to add a like
export const addLike = (userId, postId) => {
    const newLike = { id: likes.length + 1, userId, postId };
    likes.push(newLike);
    return newLike;
};

// Function to remove a like
export const removeLike = (likeId) => {
    const likeIndex = likes.findIndex(like => like.id === likeId);
    if (likeIndex !== -1) {
        likes.splice(likeIndex, 1);
        return true;
    }
    return false;
};

// Function to get all likes for a specific post
export const getAllLikesForPost = (postId) => {
    return likes.filter(like => like.postId === postId);
};
