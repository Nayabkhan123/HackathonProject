// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Directory from './components/Directory';
import { TotalAlumni } from './components/TotalAlumni';
import { CommunityFeed } from './components/CommunityFeed';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 flex flex-col gap-8">
        <Main/>
        <h1 className="text-2xl font-bold mb-4">Alumni Directory</h1>
        <Directory />
        <TotalAlumni/>
        <h3 className='font-bold text-3xl text-center'>Community Feed</h3>
        <CommunityFeed/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;