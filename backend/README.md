

# Backend API Documentation

This document provides an overview of the backend API routes, including the route name, description, endpoints, request/response format, and an example.

---

## Table of Contents
- [Users Routes](#users-routes)
- [Genre Routes](#genre-routes)
- [Movie Routes](#movie-routes)
- [Upload Routes](#upload-routes)

---


### Create User
- **Endpoint:** `POST /api/v1/users/`
- **Description:** Register a new user.
- **Request Body:**
    ```json
    {
        "username": "JohnDoe",
        "email": "john@example.com",
        "password": "yourpassword"
    }
    ```
- **Response:**
    ```json
    {
        "_id": "userId",
        "username": "JohnDoe",
        "email": "john@example.com",
        "isAdmin": false
    }
    ```
- **Example:**  
    `curl -X POST /api/v1/users/ -H "Content-Type: application/json" -d '{"username":"JohnDoe","email":"john@example.com","password":"yourpassword"}'`

---

### Login User
- **Endpoint:** `POST /api/v1/users/auth`
- **Description:** Authenticate a user with email and password.
- **Request Body:**
    ```json
    {
        "email": "john@example.com",
        "password": "yourpassword"
    }
    ```
- **Response:**
    ```json
    {
        "_id": "userId",
        "username": "JohnDoe",
        "email": "john@example.com",
        "isAdmin": false
    }
    ```
- **Example:**  
    `curl -X POST /api/v1/users/auth -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"yourpassword"}'`

---

### Logout User
- **Endpoint:** `POST /api/v1/users/logout`
- **Description:** Logout the current user by clearing the JWT cookie.
- **Response:**
    ```json
    {
        "message": "loged out successfully"
    }
    ```
- **Example:**  
    `curl -X POST /api/v1/users/logout`

---

### Get Current User Profile
- **Endpoint:** `GET /api/v1/users/profile`
- **Description:** Retrieve profile information of the currently authenticated user.
- **Headers:** Must include authentication (JWT cookie).
- **Response:**
    ```json
    {
        "_id": "userId",
        "username": "JohnDoe",
        "email": "john@example.com"
    }
    ```
- **Example:**  
    `curl -X GET /api/v1/users/profile --cookie "jwt=your_jwt_token"`

---

### Update Current User Profile
- **Endpoint:** `PUT /api/v1/users/profile`
- **Description:** Update profile information of the currently authenticated user.
- **Headers:** Must include authentication (JWT cookie).
- **Request Body (example):**
    ```json
    {
        "username": "JohnUpdated",
        "email": "johnupdated@example.com",
        "password": "newpassword" // optional
    }
    ```
- **Response:**
    ```json
    {
        "_id": "userId",
        "username": "JohnUpdated",
        "email": "johnupdated@example.com",
        "isAdmin": false
    }
    ```
- **Example:**  
    `curl -X PUT /api/v1/users/profile --cookie "jwt=your_jwt_token" -H "Content-Type: application/json" -d '{"username":"JohnUpdated","email":"johnupdated@example.com"}'`


### Create User
- **Endpoint:** `POST /api/v1/users/`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "JohnDoe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "userId",
    "username": "JohnDoe",
    "email": "john@example.com",
    "isAdmin": false
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/users/ -H "Content-Type: application/json" -d '{"username":"JohnDoe","email":"john@example.com","password":"yourpassword"}'`

---

### Login User
- **Endpoint:** `POST /api/v1/users/auth`
- **Description:** Authenticate a user with email and password.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "userId",
    "username": "JohnDoe",
    "email": "john@example.com",
    "isAdmin": false
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/users/auth -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"yourpassword"}'`

---

### Logout User
- **Endpoint:** `POST /api/v1/users/logout`
- **Description:** Logout the current user by clearing the JWT cookie.
- **Response:**
  ```json
  {
    "message": "loged out successfully"
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/users/logout`

---

### Get Current User Profile
- **Endpoint:** `GET /api/v1/users/profile`
- **Description:** Retrieve profile information of the currently authenticated user.
- **Headers:** Must include authentication (JWT cookie).
- **Response:**
  ```json
  {
    "_id": "userId",
    "username": "JohnDoe",
    "email": "john@example.com"
  }
  ```
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/users/profile --cookie "jwt=your_jwt_token"`

---

### Update Current User Profile
- **Endpoint:** `PUT /api/v1/users/profile`
- **Description:** Update profile information of the currently authenticated user.
- **Headers:** Must include authentication (JWT cookie).
- **Request Body (example):**
  ```json
  {
    "username": "JohnUpdated",
    "email": "johnupdated@example.com",
    "password": "newpassword" // optional
  }
  ```
- **Response:**
  ```json
  {
    "_id": "userId",
    "username": "JohnUpdated",
    "email": "johnupdated@example.com",
    "isAdmin": false
  }
  ```
- **Example:**  
  `curl -X PUT http://localhost:3000/api/v1/users/profile --cookie "jwt=your_jwt_token" -H "Content-Type: application/json" -d '{"username":"JohnUpdated","email":"johnupdated@example.com"}'`

---

## Genre Routes

### Create Genre
- **Endpoint:** `POST /api/v1/genre/`
- **Description:** Create a new genre. *(Requires authentication and admin privileges)*
- **Request Body:**
  ```json
  {
    "name": "Action"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "genreId",
    "name": "Action"
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/genre/ -H "Content-Type: application/json" -d '{"name":"Action"}' --cookie "jwt=admin_jwt_token"`

---

### Update Genre
- **Endpoint:** `PUT /api/v1/genre/:id`
- **Description:** Update an existing genre by its ID. *(Requires authentication and admin privileges)*
- **Request Body:**
  ```json
  {
    "name": "Adventure"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "genreId",
    "name": "Adventure"
  }
  ```
- **Example:**  
  `curl -X PUT http://localhost:3000/api/v1/genre/genreId -H "Content-Type: application/json" -d '{"name":"Adventure"}' --cookie "jwt=admin_jwt_token"`

---

### Delete Genre
- **Endpoint:** `DELETE /api/v1/genre/:id`
- **Description:** Remove a genre by its ID. *(Requires authentication and admin privileges)*
- **Response:**
  ```json
  {
    "_id": "genreId",
    "name": "GenreName"
  }
  ```
- **Example:**  
  `curl -X DELETE http://localhost:3000/api/v1/genre/genreId --cookie "jwt=admin_jwt_token"`

---

### List Genres
- **Endpoint:** `GET /api/v1/genre/genres`
- **Description:** Get a list of all genres.
- **Response:**
  ```json
  [
    { "_id": "genre1", "name": "Action" },
    { "_id": "genre2", "name": "Comedy" }
  ]
  ```
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/genre/genres`

---

### Read Genre
- **Endpoint:** `GET /api/v1/genre/:id`
- **Description:** Retrieve details of a specific genre by its ID.
- **Response:**
  ```json
  {
    "_id": "genreId",
    "name": "Action"
  }
  ```
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/genre/genreId`

---

## Movie Routes

### Get All Movies
- **Endpoint:** `GET /api/v1/movies/all-movies`
- **Description:** Retrieve a list of all movies.
- **Response Format:**
  ```json
  [
    {
      "_id": "movieId",
      "name": "Movie Name",
      "year": 2020,
      "detail": "Movie details",
      "image": "/uploads/image-12345.jpg",
      "genre": "genreId",
      "cast": ["Actor 1", "Actor 2"],
      "reviews": [],
      "numReviews": 0
    }
  ]
  ```
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/movies/all-movies`

---

### Get Specific Movie
- **Endpoint:** `GET /api/v1/movies/specific-movie/:id`
- **Description:** Retrieve details of a specific movie by its ID.
- **Response Format:**
  ```json
  {
    "_id": "movieId",
    "name": "Movie Name",
    "year": 2020,
    "detail": "Movie details",
    "image": "/uploads/image-12345.jpg",
    "genre": "genreId",
    "cast": ["Actor 1", "Actor 2"],
    "reviews": [],
    "numReviews": 0
  }
  ```
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/movies/specific-movie/movieId`

---

### Create Movie
- **Endpoint:** `POST /api/v1/movies/create-movie`
- **Description:** Add a new movie to the database. *(Requires authentication and admin privileges)*
- **Request Body:**
  ```json
  {
    "name": "New Movie",
    "year": 2021,
    "detail": "Movie details here",
    "cast": ["Actor 1", "Actor 2"],
    "rating": 0,
    "image": "/uploads/uploadedImage.jpg",
    "genre": "genreId"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "movieId",
    "name": "New Movie",
    "year": 2021,
    "detail": "Movie details here",
    "cast": ["Actor 1", "Actor 2"],
    "image": "/uploads/uploadedImage.jpg",
    "genre": "genreId",
    "numReviews": 0
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/movies/create-movie -H "Content-Type: application/json" -d '{"name":"New Movie","year":2021,"detail":"Movie details here","cast":["Actor 1","Actor 2"],"rating":0,"image":"/uploads/uploadedImage.jpg","genre":"genreId"}' --cookie "jwt=admin_jwt_token"`

---

### Update Movie
- **Endpoint:** `PUT /api/v1/movies/update-movie/:id`
- **Description:** Update details of an existing movie. *(Requires authentication and admin privileges)*
- **Request Body (example):**
  ```json
  {
    "name": "Updated Movie",
    "year": 2022,
    "detail": "Updated movie details",
    "cast": ["Updated Actor 1", "Updated Actor 2"],
    "image": "/uploads/updatedImage.jpg",
    "genre": "genreId"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "movieId",
    "name": "Updated Movie",
    "year": 2022,
    "detail": "Updated movie details",
    "cast": ["Updated Actor 1", "Updated Actor 2"],
    "image": "/uploads/updatedImage.jpg",
    "genre": "genreId",
    "numReviews": 0
  }
  ```
- **Example:**  
  `curl -X PUT http://localhost:3000/api/v1/movies/update-movie/movieId -H "Content-Type: application/json" -d '{"name":"Updated Movie","year":2022,"detail":"Updated movie details","cast":["Updated Actor 1","Updated Actor 2"],"image":"/uploads/updatedImage.jpg","genre":"genreId"}' --cookie "jwt=admin_jwt_token"`

---

### Delete Movie
- **Endpoint:** `DELETE /api/v1/movies/delete-movie/:id`
- **Description:** Delete a movie by its ID. *(Requires authentication and admin privileges)*
- **Response:**
  ```json
  {
    "message": "movie deleted successfully"
  }
  ```
- **Example:**  
  `curl -X DELETE http://localhost:3000/api/v1/movies/delete-movie/movieId --cookie "jwt=admin_jwt_token"`

---

### Movie Review
- **Endpoint:** `POST /api/v1/movies/:id/reviews`
- **Description:** Add a review for a specific movie. *(Requires authentication and valid movie ID)*
- **Request Body:**
  ```json
  {
    "rating": 4,
    "comment": "Great movie!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "review added"
  }
  ```
- **Example:**  
  `curl -X POST http://localhost:3000/api/v1/movies/movieId/reviews -H "Content-Type: application/json" -d '{"rating":4,"comment":"Great movie!"}' --cookie "jwt=your_jwt_token"`

---

### Delete Comment
- **Endpoint:** `DELETE /api/v1/movies/delete-comment`
- **Description:** Delete a movie comment. *(Requires authentication and admin privileges)*
- **Request Body:**
  ```json
  {
    "movieId": "movieId",
    "reviewId": "reviewId"
  }
  ```
- **Response:**
  ```json
  {
    "message": "comment deleted successfully"
  }
  ```
- **Example:**  
  `curl -X DELETE http://localhost:3000/api/v1/movies/delete-comment -H "Content-Type: application/json" -d '{"movieId":"movieId","reviewId":"reviewId"}' --cookie "jwt=admin_jwt_token"`

---

### Get New Movies
- **Endpoint:** `GET /api/v1/movies/new-movies`
- **Description:** Retrieve the latest movies added.
- **Response:** Array of movie objects.
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/movies/new-movies`

---

### Get Top Movies
- **Endpoint:** `GET /api/v1/movies/top-movies`
- **Description:** Retrieve top rated movies.
- **Response:** Array of movie objects.
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/movies/top-movies`

---

### Get Random Movies
- **Endpoint:** `GET /api/v1/movies/random-movies`
- **Description:** Retrieve a random selection of movies.
- **Response:** Array of movie objects.
- **Example:**  
  `curl -X GET http://localhost:3000/api/v1/movies/random-movies`

---

## Upload Routes

### Upload Image
- **Endpoint:** `POST /api/v1/upload/`
- **Description:** Upload an image file.
- **Request:**  
  Accepts a single image file (field name: `image`) using multipart/form-data.
- **Response:**
  ```json
  {
    "message": "Image uploaded successfully",
    "image": "/uploads/image-1629398472930.jpg"
  }
  ```
- **Example:**  
  Using cURL:
  ```bash
  curl -X POST http://localhost:3000/api/v1/upload/ -F "image=@/path/to/your/image.jpg"
  ```

---

## Notes
- **Authentication:** Routes requiring authentication need a valid JWT set as an httpOnly cookie.
- **Authorization:** Certain routes (e.g., creating/updating movies or genres) require admin privileges.
- **Error Handling:** In case of errors, the API returns a JSON object with an error message and an appropriate HTTP status code.

----

This documentation covers the major routes of your backend. Adjust the details as needed to match your final implementation.

