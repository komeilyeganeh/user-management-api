# User Management API - Backend

A complete RESTful API for user management with JWT authentication.

## 🚀 Features
- User Registration & Login
- JWT Authentication
- CRUD Operations for Users
- Password Hashing
- Protected Routes

## 📚 API Documentation
### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User Endpoints (Protected)
- `GET /api/users` - Get all users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🛠️ Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, bcryptjs
- CORS, dotenv