import React from "react";

function BugItem({ bug, onDelete }) {
  return (
    <div className="bg-gray-700 text-white p-4 rounded mb-2">
      <h3 className="text-xl font-bold">{bug.title}</h3>
      <p className="text-sm italic">{bug.description}</p>
      <p className="mt-1">
        <strong>Status:</strong> {bug.status}
      </p>
      <button
        onClick={() => onDelete(bug.id)}
        className="mt-2 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default BugItem;
