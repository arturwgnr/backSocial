===========================================================
🧠 PROJECT: backSocial
===========================================================

📁 STRUCTURE
-----------------------------------------------------------
backSocial/
│
├── backend/
│   ├── prisma/
│   ├── node_modules/
│   ├── src/
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   └── Profiles.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js


🚀 OVERVIEW
-----------------------------------------------------------
backSocial is a full-stack CRUD application built with:
- Backend: Node.js + Express + Prisma + PostgreSQL
- Frontend: React + Vite

It allows creating, listing, updating and deleting user profiles in a modern, responsive interface.

The app is divided into two main parts:
- Backend → handles routes, database logic and Prisma ORM
- Frontend → provides a UI for managing profiles


💾 DATABASE MODEL (Prisma)
-----------------------------------------------------------
model Profile {
  id         Int     @id @default(autoincrement())
  name       String
  username   String
  bio        String?
  profession String?
  online     Boolean @default(false)
}


🧩 BACKEND ROUTES
-----------------------------------------------------------
GET    /profiles          → list all profiles
POST   /profiles          → create new profile
PUT    /profiles/:id      → update profile
DELETE /profiles/:id      → delete profile


🎨 FRONTEND FEATURES
-----------------------------------------------------------
- Fetches profiles from backend and displays them dynamically
- Form to create new profiles (inline)
- Edit and delete functionality
- Clean dark UI with golden accents
- Responsive layout using CSS Grid
- Delete button (X) on top-right of each card


⚙️ RUN LOCALLY
-----------------------------------------------------------

1️⃣ Clone the repository
    git clone https://github.com/YOUR_USERNAME/backSocial.git

2️⃣ Install backend dependencies
    cd backSocial/backend
    npm install

3️⃣ Setup Prisma
    npx prisma migrate dev --name init
    npx prisma generate

4️⃣ Start backend
    npm run dev
    (server runs on http://localhost:3000)

5️⃣ Install frontend dependencies
    cd ../frontend
    npm install

6️⃣ Start frontend
    npm run dev
    (frontend runs on http://localhost:5173)


🧠 NOTES
-----------------------------------------------------------
- Ensure PostgreSQL is running locally before starting the backend.
- All requests are handled by Express routes inside backend/src/index.js.
- CORS and JSON middleware are enabled by default.


📌 AUTHOR
-----------------------------------------------------------
Developed by Artur Wagner  
Ragnarok Series — Full-Stack Odyssey (October 2025)
"Foco, progresso constante e autonomia real."

===========================================================
