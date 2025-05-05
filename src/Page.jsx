import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { topics } from "./data";

const allTags = ["All", "Beginner", "Advanced", "AI", "JavaScript", "Web Development", "Cloud", "AWS", "Azure", "Machine Learning"];

export default function SearchProject({topics}) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedTag === "All" || topic.tags.includes(selectedTag))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">Topic Wave Filter</h1>
      <p className="text-center text-gray-600 mb-6">Browse and filter through our content of educational topics</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative w-full sm:w-48">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allTags.map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">Topics ({filtered.length})</h2>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No topics found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((topic) => (
            <div key={topic.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition">
              <h3 className="text-blue-800 font-semibold text-lg">{topic.name}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">{topic.description.slice(0, 100)}...</p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}