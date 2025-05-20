const API_URL = "http://127.0.0.1:5000/bugs";

export const fetchBugs = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addBug = async (bug) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bug),
  });
  return await res.json();
};

export const deleteBug = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
