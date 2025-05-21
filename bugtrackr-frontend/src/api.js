const API_BASE = "http://127.0.0.1:5000";

export const fetchBugs = async () => {
  const res = await fetch(`${API_BASE}/bugs`);
  return res.json();
};

export const addBug = async (bug) => {
  const res = await fetch(`${API_BASE}/bugs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bug),
  });
  return res.json();
};

export const deleteBug = async (id) => {
  await fetch(`${API_BASE}/bugs/${id}`, {
    method: "DELETE",
  });
};

export const updateBug = async (id, updatedBug) => {
  const res = await fetch(`${API_BASE}/bugs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBug),
  });
  return res.json();
};
