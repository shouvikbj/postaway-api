// models/Comment.js

// Dummy comment data (for in-memory operations)
let comments = [
    { id: 1, userId: 1, postId: 1, content: 'First comment on post 1' },
    { id: 2, userId: 2, postId: 1, content: 'Second comment on post 1' },
    { id: 3, userId: 3, postId: 2, content: 'First comment on post 2' }
];

// Function to create a new comment
export const createComment = (userId, postId, content) => {
    const newComment = { id: comments.length + 1, userId, postId, content };
    comments.push(newComment);
    return newComment;
};

// Function to get all comments for a specific post
export const getAllCommentsForPost = (postId) => {
    const postComments = comments.filter(comment => comment.postId === postId);
    return postComments;
};

// Function to update a comment
export const updateComment = (commentId, content) => {
    const commentIndex = comments.findIndex(comment => comment.id === commentId);
    if (commentIndex !== -1) {
        comments[commentIndex].content = content;
        return comments[commentIndex];
    }
    return null;
};

// Function to delete a comment
export const deleteComment = (commentId) => {
    const commentIndex = comments.findIndex(comment => comment.id === commentId);
    if (commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        return true;
    }
    return false;
};
