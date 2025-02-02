import React from "react";

export default function Page({ params }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white p-6 gap-6">
        <div className="absolute bottom-10 left-5 p-5 border bg-slate-900 rounded-full">Roomcode <span className="font-semibold">{params.roomcode}</span></div>
      <div className="w-1/5 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Players</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Player 1
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Player 2
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Player 3
          </li>
        </ul>
      </div>


      <div className="flex-1 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Sketchboard</h2>
        <div className="w-full h-[500px] bg-white rounded-lg">
          <canvas className="w-full h-full"></canvas>
        </div>
      </div>


      
      <div className="w-1/5 bg-gray-800 p-4 rounded-lg flex flex-col">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-2">
            <div className="bg-gray-700 p-2 rounded-lg">
              <p className="text-sm">Player 1: Is it a cat?</p>
            </div>
            <div className="bg-gray-700 p-2 rounded-lg">
              <p className="text-sm">Player 2: No, it's a dog!</p>
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Type your guess..."
          className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}