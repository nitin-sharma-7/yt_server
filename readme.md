# yt_backend

A backend server built with Express.js, MongoDB, and JWT for authentication.

## Features

- RESTful API built with Express.js (version 5)
- MongoDB integration using Mongoose
- User authentication with JWT (jsonwebtoken)
- Password hashing with bcrypt
- Environment variables support via dotenv
- CORS enabled for cross-origin requests
- Auto-restart during development using nodemon

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MongoDB database (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nitin-sharma-7/yt_server.git
   cd yt_backend
   ```
2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add your environment variables, eg

PORT=3000
SECRET_KEY=sdksjd
MONGO_URL=jakskfjajl

## Running the Server

npm run dev
npm start

## Dependencies

express

mongoose

jsonwebtoken

bcrypt

cors

dotenv

nodemon

## License

This project is licensed under the MIT License.
