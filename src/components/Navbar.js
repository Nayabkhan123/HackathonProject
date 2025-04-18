// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-semibold">Alumni Connect</div>
      <div>
        <a href={"#communityFeed"}>Community</a>
      </div>
      <div>
        <button className="px-3 py-1">Login</button>
        <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">Sign Up</button>
      </div>
    </nav>
  );
}