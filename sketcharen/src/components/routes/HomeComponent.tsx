"use client"
import React, { useState } from "react";

function HomeComponent() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to <span className="text-blue-400">Sketch Arena</span>
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-64 p-3 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition">
          Host Game
        </button>
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold transition">
          Join Game
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;