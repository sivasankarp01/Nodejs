# Finance Tracker API

A production-ready Finance Tracker Backend built with Node.js, Express.js, PostgreSQL, Sequelize ORM, JWT Authentication, and MVC Architecture.

This API allows users to manage their personal finances by tracking income, expenses, categories, and financial reports securely.

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- bcrypt Password Hashing
- dotenv
- MVC Architecture

---

## Project Structure

```text
USER_CURD/
└─ src/-
   ├─ config/
   │   └─ db.js
   │
   ├─ controllers/
   │   ├─ auth.controller.js
   │   ├─ user.controller.js
   │
   ├─ middleware/
   │   ├─ auth.middleware.js
   │   ├─ error.middleware.js
   │ 
   ├─ models/
   │   ├─ index.js
   │   ├─ user.model.js
   │
   ├─ routes/
   │   ├─ auth.routes.js
   │   ├─ user.routes.js
   │
   ├─ services/
   │   ├─ auth.service.js
   │   ├─ user.service.js
   │
   ├─ validations/
   │   ├─ auth.validation.js
   │
   ├─ utils/
   │   ├─ generateToken.js
   │
   ├─ app.js
   └─ server.js

.env
package.json
README.md
```

---

# Features

### Authentication

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes

### User Management

- Get Profile
- Update Profile
- Delete Account

---

# Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
DB_USER=your_user_name
DB_PASSWORD=your_password

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

---

# Database Setup

### Create PostgreSQL Database

```sql
CREATE DATABASE dbname;
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/sivasankarp01/Nodejs.git
```

Move into project directory:

```bash
cd Nodejs
```

Install dependencies:

```bash
npm install
```

---

# Running the Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

# Scripts

```json
{
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

---

# Authentication

After successful login, a JWT token will be returned.

Example:

```json
{
  "success": true,
  "token": "eyJhbGc..."
}
```

Send token in request headers:

```http
Authorization: Bearer JWT_TOKEN
```

---

# API Documentation

Base URL

```http
http://localhost:5000/api
```

---

# Auth APIs

## Register User

### Endpoint

```http
POST /auth/register
```

### Request

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "Password@123"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login User

### Endpoint

```http
POST /auth/login
```

### Request

```json
{
  "email": "john@gmail.com",
  "password": "Password@123"
}
```

### Response

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

---

# User APIs

## Get Current User

### Endpoint

```http
GET /users/me
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

### Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

---

## Update Profile

### Endpoint

```http
PUT /users/me
```

### Request

```json
{
  "name": "John Updated"
}
```

---

## Delete Account

### Endpoint

```http
DELETE /users/me
```


Not Found

```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

# Security

- Passwords hashed using bcrypt
- JWT Authentication
- Environment Variables
- Protected Routes
- Error Handling Middleware

---

# Future Enhancements

- Refresh Token Authentication
- Google OAuth
- Email Verification
- Forgot Password
- Reset Password
- Monthly Financial Reports
- CSV/Excel Export
- Docker Support
- Swagger API Documentation
- Unit Testing (Jest)
- CI/CD Pipeline

---

# Author

Sivasankar P

Node.js Backend Developer