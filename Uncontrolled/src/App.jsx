import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [store, setStore] = useState([]);

  const searchFilter = store.filter((ele) =>
    ele.toLowerCase().includes(search.toLowerCase())
  );

  const handler = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setStore([...store, name]);
    setName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Task Manager
        </h1>

        <form onSubmit={handler} className="space-y-4">
          <div className="flex gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Add
            </button>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </form>

        <div className="mt-6 space-y-3 max-h-64 overflow-y-auto">
          {searchFilter.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              No tasks found 📝
            </p>
          ) : (
            searchFilter.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-gray-800 font-medium">{item}</p>
                <button
                  onClick={() =>
                    setStore(store.filter((_, i) => i !== idx))
                  }
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
