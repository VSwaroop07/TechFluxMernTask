# MERN User App (Frontend)

This repository contains the frontend for the MERN User App — a simple user management interface built with React that connects to a Node/Express + MongoDB backend.

## Features
- User listing
- Create, update and delete users
- Form validation
- Responsive layout

## Tech stack
- React (Create React App)
- Axios for HTTP requests
- React Router for client routing
- Styling with CSS / your preferred library

## Prerequisites
- Node.js (>=14)
- npm or yarn
- Backend server running (see repository root or backend README)

## Local setup
1. Install dependencies:
	npm install

2. Create a .env file if the project expects environment variables (example):
	REACT_APP_API_URL=http://localhost:5000/api

3. Start the dev server:
	npm start

4. Build for production:
	npm run build

## Scripts
- npm start — start development server
- npm run build — build production assets
- npm test — run tests (if configured)

## Configuration
Point REACT_APP_API_URL (or similar) to the backend API base URL. Example:

REACT_APP_API_URL=http://localhost:5000/api

## Contributing
1. Fork the repo
2. Create a branch: git checkout -b feature/name
3. Commit your changes: git commit -m "feat: description"
4. Push: git push origin feature/name
5. Open a pull request

## License
Specify your license in the project root (e.g., MIT).

## Notes
This README covers the frontend portion only. See the backend README for server, database and authentication setup.
