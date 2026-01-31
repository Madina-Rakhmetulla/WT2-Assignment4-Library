# Online Library (WT2 Assignment 4)

This project implements:
- MVC structure (routes/controllers/models)
- MongoDB (Mongoose)
- Authentication: Register/Login with **bcrypt password hashing**
- Authorization: **JWT**
- RBAC: **POST/PUT/DELETE = admin only**, GET = public
- Two related collections: **Authors** and **Books** (Book.author -> Author._id)

## 1) Setup
1. Install dependencies:
   - `npm install`
2. Create `.env` using `.env.example`:
   - `MONGODB_URI=...`
   - `JWT_SECRET=...`
3. Run:
   - `npm run dev` (or `npm start`)

## 2) API Endpoints

### Auth
- `POST /api/auth/register`  body: `{ "email": "...", "password": "...", "role": "admin" | "user" }`
- `POST /api/auth/login`     body: `{ "email": "...", "password": "..." }`
  - returns `{ token }`

### Authors (admin write)
- `GET /api/authors`
- `GET /api/authors/:id`
- `POST /api/authors` (admin) header: `Authorization: Bearer <token>`
- `PUT /api/authors/:id` (admin)
- `DELETE /api/authors/:id` (admin)

### Books (admin write)
- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books` (admin) body: `{ "title": "...", "year": 2020, "author": "<authorId>" }`
- `PUT /api/books/:id` (admin)
- `DELETE /api/books/:id` (admin)

## 3) Frontend pages
- `/auth.html` — Register / Login (stores JWT in localStorage)
- `/library-admin.html` — Add authors and books (admin token required)
- `/library.html` — Public list of books (GET only)

> Note: You must register/login as an admin to add books/authors from the admin page.
