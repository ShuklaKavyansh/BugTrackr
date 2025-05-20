import React, { useEffect, useState } from "react";
import { fetchBugs, addBug, deleteBug } from "./api";
import BugItem from "./components/BugItem";
import BugForm from "./components/BugForm";

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBugs();
      setBugs(data);
    };
    getData();
  }, []);

  const handleAddBug = async (bug) => {
    const newBug = await addBug(bug);
    setBugs([newBug, ...bugs]);
  };

  const handleDeleteBug = async (id) => {
    await deleteBug(id);
    setBugs(bugs.filter((bug) => bug.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-400">🐞 BugTrackr</h1>
      <BugForm onAddBug={handleAddBug} />
      <div>
        {bugs.map((bug) => (
          <BugItem key={bug.id} bug={bug} onDelete={handleDeleteBug} />
        ))}
      </div>
    </div>
  );
}

export default App;
