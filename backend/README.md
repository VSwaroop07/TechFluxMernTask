# Backend

This backend powers the MERN User App. It provides the API, authentication, and database access for the application.

## Features

- REST API with Node.js and Express
- MongoDB integration with Mongoose
- User authentication and authorization
- JWT-based protected routes
- Environment-based configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure

```bash
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── package.json
└── server.js
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Run the server

```bash
npm start
```

For development:

```bash
npm run dev
```

## API Endpoints

Common endpoints may include:

- `POST /api/auth/register` - Register a user
- `POST /api/auth/login` - Login a user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Notes

- Make sure MongoDB is running before starting the server.
- Keep sensitive values in `.env` only.
- Update the endpoints and scripts to match your implementation.
