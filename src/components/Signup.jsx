import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
            <input
                type="text"
                placeholder="Username"
                className="w-64 px-4 py-2 mb-2 rounded border border-gray-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="w-64 px-4 py-2 mb-2 rounded border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
           
            <input
                type="password"
                placeholder="Password"
                className="w-64 px-4 py-2 mb-2 rounded border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="w-64 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSignup}
            >
                Sign Up
            </button>
        </div>
    );
};

export default Signup;