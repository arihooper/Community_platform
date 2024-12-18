// src/components/App.js
import React from 'react';
import Register from './Register';
import CreatePost from './CreatePost';

const App = () => {
    return (
        <div>
            <h1>Community Platform</h1>
            <Register />
            <CreatePost />
        </div>
    );
};

export default App;