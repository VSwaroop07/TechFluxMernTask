# MERN User App

A full-stack web application built with MongoDB, Express, React, and Node.js for managing user data.

## Features

- User registration and authentication
- User profile management
- Responsive UI with React
- RESTful API with Express
- MongoDB database integration
- Secure password handling

## Tech Stack

- **Frontend**: React, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or connection string available

### Setup

1. Clone the repository
```bash
git clone <repository-url>
cd MERN_USER_APP
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Configure environment variables in `.env` file

5. Start the backend server
```bash
cd server
npm start
```

6. Start the frontend application
```bash
cd client
npm start
```

## Project Structure

```
MERN_USER_APP/
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Usage

- Navigate to `http://localhost:3000` to access the application
- Register a new account or log in with existing credentials
- Manage user profile and data

## Contributing

Pull requests are welcome. Please open an issue to discuss major changes.

## License

MIT License
