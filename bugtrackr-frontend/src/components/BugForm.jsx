import { useState, useEffect } from "react";

export default function BugForm({ onSubmit, editBug, cancelEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");

  useEffect(() => {
    if (editBug) {
      setTitle(editBug.title);
      setDescription(editBug.description);
      setStatus(editBug.status);
    }
  }, [editBug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    onSubmit({ title, description, status });

    // Clear fields
    setTitle("");
    setDescription("");
    setStatus("Open");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-lg font-bold mb-2">{editBug ? "Edit Bug" : "Add Bug"}</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="border p-2 w-full mb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editBug ? "Update" : "Add"}
        </button>
        {editBug && (
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
