import React from 'react';
import Register from './components/Register';  // Corrected import path
import CreatePost from './components/CreatePost';  // Corrected import path

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
