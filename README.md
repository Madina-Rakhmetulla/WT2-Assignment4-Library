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

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/95c8305f-7870-497c-b4b7-bb3e12ad189d" />
<img width="1440" height="898" alt="Снимок экрана 2026-02-05 в 15 34 27" src="https://github.com/user-attachments/assets/93dd78b3-3c4d-4b8d-9230-d737d708834c" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 34 51" src="https://github.com/user-attachments/assets/110dd857-3d28-419b-ad29-1f342d641e12" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 35 32" src="https://github.com/user-attachments/assets/4cc23c9e-8236-40e6-b2ef-4f84b38bb979" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 36 19" src="https://github.com/user-attachments/assets/197e9765-8c72-46b3-9f7a-4c8f1781b4c0" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 36 44" src="https://github.com/user-attachments/assets/a23733ba-aad0-4953-8ccf-568346223921" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 37 01" src="https://github.com/user-attachments/assets/f4c87878-c115-44a5-9b58-001675f920c9" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 37 28" src="https://github.com/user-attachments/assets![Uploading Снимок экрана 2026-02-05 в 15.37.45.png…]()
/d7050590-f76b-447a-860a-37259845a46c" />
<img width="1440" height="900" alt="Снимок экрана 2026-02-05 в 15 38 15" src="https://github.com/user-attachments/assets/74e5d4f0-bad5-44e9-b072-f198b6a239b1" />
<img width="1440" height="899" alt="Снимок экрана 2026-02-05 в 15 39 53" src="https://github.com/user-attachments/assets/ca23cb3f-8f92-4437-8c83-316d3eff6594" />












