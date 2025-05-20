import React, { useState } from "react";

function BugForm({ onAddBug }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddBug({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("Open");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded mb-4">
      <input
        type="text"
        placeholder="Bug Title"
        className="p-2 m-1 w-full rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Bug Description"
        className="p-2 m-1 w-full rounded text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="p-2 m-1 w-full rounded text-black"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
        Add Bug
      </button>
    </form>
  );
}

export default BugForm;
