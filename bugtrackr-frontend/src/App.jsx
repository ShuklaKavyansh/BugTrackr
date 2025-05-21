import { useEffect, useState } from "react";
import {
  fetchBugs,
  addBug,
  deleteBug,
  updateBug,
} from "./api";
import BugItem from "./components/BugItem";
import BugForm from "./components/BugForm";

export default function App() {
  const [bugs, setBugs] = useState([]);
  const [editBugData, setEditBugData] = useState(null);

  const loadBugs = async () => {
    const data = await fetchBugs();
    setBugs(data);
  };

  useEffect(() => {
    loadBugs();
  }, []);

  const handleAddOrUpdate = async (bug) => {
    if (editBugData) {
      const updated = await updateBug(editBugData.id, bug);
      setBugs((prev) =>
        prev.map((b) => (b.id === updated.id ? updated : b))
      );
      setEditBugData(null);
    } else {
      const newBug = await addBug(bug);
      setBugs((prev) => [...prev, newBug]);
    }
  };

  const handleDelete = async (id) => {
    await deleteBug(id);
    setBugs((prev) => prev.filter((bug) => bug.id !== id));
  };

  const handleEdit = (bug) => {
    setEditBugData(bug);
  };

  const cancelEdit = () => {
    setEditBugData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">🐞 BugTrackr</h1>
      <div className="max-w-xl mx-auto">
        <BugForm onSubmit={handleAddOrUpdate} editBug={editBugData} cancelEdit={cancelEdit} />
        {bugs.map((bug) => (
          <BugItem key={bug.id} bug={bug} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}
