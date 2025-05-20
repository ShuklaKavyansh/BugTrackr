# 🐞 BugTrackr

**BugTrackr** is a simple and efficient full-stack bug tracking web application built with **React** (Vite) for the frontend and **Flask** for the backend. It allows users to add, view, and delete bug reports, including details like title, description, and status.

---

## 🚀 Features

- Add new bugs with title, description, and status (Open/In Progress/Resolved)
- View list of all reported bugs
- Delete bugs from the list
- Responsive and modern UI using Tailwind CSS (via CDN)

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Vite)
- Tailwind CSS (CDN)

**Backend:**
- Python Flask
- Flask-CORS
- UUID for unique bug IDs

---

## 📂 Project Structure

BugTrackr/
├── bugtrackr-backend/
│ └── app.py
├── bugtrackr-frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── BugForm.jsx
│ │ │ └── BugItem.jsx
│ │ ├── App.jsx
│ │ ├── api.js
│ │ ├── index.css
│ │ └── main.jsx
│ └── index.html
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/BugTrackr.git
cd BugTrackr
2. Backend Setup (Flask)
bash
Copy
Edit
cd bugtrackr-backend
python -m venv venv
source venv/bin/activate        # or venv\Scripts\activate on Windows
pip install flask flask-cors
python app.py
Server runs at: http://127.0.0.1:5000

3. Frontend Setup (Vite + React)
bash
Copy
Edit
cd bugtrackr-frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

🔍 Usage
Enter bug title, description, and select status.

Click "Add Bug" to submit.

Bugs will appear in a list with their status.

Click "Delete" to remove any bug.

🧩 Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Made with ❤️ using React, Flask, and Tailwind CSS.

