Shopping Cart Web Application

This project is a full-stack e-commerce workflow application built as part of the ABCDE Ventures Assignment.
It demonstrates user authentication, single-device session management, cart handling, and order placement using a modern web stack.  


Key Highlights

Secure authentication using JWT
Single-device login enforcement
Protected APIs using authentication middleware
React-based frontend with clean UX
MongoDB-backed persistent storage  


Backend

Node.js + Express
MongoDB + Mongoose
JWT for authentication
bcryptjs for password hashing


Frontend

React (Vite)
Axios for API communication
CSS for styling (can be extended to Tailwind)


Single-Device Session Management
To ensure a user can log in from only one device at a time, the following strategy is used:
1) On successful login, a JWT token is generated.
2) The token is stored in the user’s database record.
3) If the same user tries to log in again while a token already exists:
        The backend responds with 403 Forbidden
        The frontend shows:
            “You cannot login on another device.”
4) On logout, the token is cleared from the database, allowing login again.
This logic is enforced on both backend and frontend. 


How to Run the Project
Backend
cd backend
npm install
npm run dev 

Frontend
cd frontend
npm install
npm run dev


Open browser at:
http://localhost:5173
