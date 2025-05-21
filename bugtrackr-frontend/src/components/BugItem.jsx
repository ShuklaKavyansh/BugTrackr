export default function BugItem({ bug, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-2">
      <h3 className="text-lg font-semibold">{bug.title}</h3>
      <p className="text-gray-700 mb-1">{bug.description}</p>
      <p className="text-sm text-gray-500 mb-2">Status: {bug.status}</p>
      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={() => onEdit(bug)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(bug.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
