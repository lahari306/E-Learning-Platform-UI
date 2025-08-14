# 📚 E-Learning Platform Frontend

A modern **React + Vite + Tailwind CSS** frontend for an e-learning platform.  
Features include:

- 📜 **Course Listing** — Browse available courses
- 📈 **Progress Tracking** — View course completion percentage
- 🎥 **Video Embedding** — Watch course videos directly
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/e-learning-frontend.git
cd e-learning-frontend
2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev
📂 Project Structure
e-learning-frontend/
│
├── public/                  # Static files (images, etc.)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── CourseCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── VideoPlayer.jsx
│   │
│   ├── pages/               # Pages for routing
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   └── Progress.jsx
│   │
│   ├── data/                # Static data (sample courses)
│   │   └── courses.js
│   │
│   ├── App.jsx              # Main app with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + global styles
│
├── package.json
├── vite.config.js
└── README.md



