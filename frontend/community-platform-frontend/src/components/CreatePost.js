// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState(''); // Corrected here
    const [message, setMessage] = useState('');

    const handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/posts', {
                title,
                content,
                user_id: userId,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleCreatePost}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}  // Corrected here
                    required
                />
                <button type="submit">Create Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreatePost;
