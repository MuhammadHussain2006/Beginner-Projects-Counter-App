import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Counter App
        </h1>

        <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-6xl md:text-7xl font-extrabold text-white text-center">
            {count}
          </h2>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setCount(count + 1)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-200"
          >
            <span className="text-xl">+ Increase</span>
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-200"
          >
            <span className="text-xl">- Decrease</span>
          </button>

          <button
            onClick={() => setCount(0)}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-200"
          >
            <span className="text-xl">↻ Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;