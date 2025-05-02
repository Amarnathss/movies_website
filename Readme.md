# Movies Website

A full-stack MERN application for managing and reviewing movies. This project includes user authentication, movie and genre management, image uploads, and review functionality. It features an admin dashboard for managing movies and comments, and uses Redux with RTK Query for state management and data fetching.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [License](#license)

---

## Overview

This Movies Website is a full-stack MERN application that allows users to browse movies, view details, add reviews, and manage their profile. Administrators can add, update, and delete movies and genres. The backend provides RESTful endpoints for users, movies, genres, and image uploads, while the frontend is built with React and leverages Redux for state management.

---

## Tech Stack

- **Frontend:**
  - React
  - Redux Toolkit & RTK Query
  - React Router
  - Tailwind CSS (or custom CSS)
  - React Toastify (for notifications)
  - Slick Carousel (for movie sliders)

- **Backend:**
  - Node.js
  - Express
  - MongoDB & Mongoose
  - Multer (for file uploads)
  - JWT for authentication
  - Cookie Parser & CORS

- **Tooling:**
  - concurrently (to run backend and frontend simultaneously)
  - nodemon (for development)

---

## Features

- User Registration & Login with JWT-based authentication
- User Profile management
- Movie listing, details, reviews, and genres
- Admin functionalities for managing movies, genres, and comments
- Image uploads for movies
- Redux for state management and RTK Query for data fetching
- Responsive design with carousel sliders for movie displays

---

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/movies_website.git
   cd movies_website
   ```

2. **Install Dependencies:**

   - **Backend:**
     ```bash
     npm install
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm install
     cd ..
     ```

3. **Environment Variables:**

   Create a `.env` file in the `backend` folder with the following variables:

   ```env
   PORT=3000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Database Setup:**

   Ensure MongoDB is installed and running on your machine, or use a connection string from a hosted provider (e.g., MongoDB Atlas).

---

## Running the Project

- **Fullstack (Both Frontend & Backend):**

  On Windows, run:

  ```bash
  npm run fullstack
  ```

  This command concurrently runs the backend using nodemon and the frontend using the Vite dev server.

- **Separate Commands:**

  - **Backend Only:**
    ```bash
    npm run backend
    ```
  
  - **Frontend Only:**
    ```bash
    npm run frontend
    ```

Open [http://localhost:5173](http://localhost:5173) to view the frontend. The backend API is available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
movies_website/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── genreController.js
│   │   ├── movieController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── asyncHandler.js
│   │   ├── authMiddleware.js
│   │   └── checkId.js
│   ├── models/
│   │   ├── Genre.js
│   │   ├── Movie.js
│   │   └── user.js
│   ├── routes/
│   │   ├── genreRoutes.js
│   │   ├── movieRoutes.js
│   │   ├── uploadRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   │   ├── api/
│   │   │   ├── features/
│   │   │   └── store.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── package.json
```

---

## API Documentation

For detailed API endpoints (users, movies, genres, image upload), please refer to the [backend documentation](./backend/README.md) in the backend folder.

---

## License

This project is licensed under the MIT License.