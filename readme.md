📚 Modern Bookstore 
A feature-rich, MERN-stack e-commerce platform designed for book enthusiasts. This application provides a seamless experience from browsing a curated catalog .

🌐 Live Demo & Previews
Live Application: https://bookstore-two-ochre.vercel.app/

Repository: [(https://github.com/Gaurav-0301/BookStore)]

🏗️ Architecture
This project is built using the MERN Stack, ensuring a high-performance, scalable, and modern web experience.

Getty Images

Frontend: React.js for a dynamic, responsive User Interface.

Backend: Node.js & Express.js handling RESTful API requests.

Database: MongoDB for flexible, document-based data storage.



✨ Key Features

Dynamic Catalog: Browse books by categories, genres, or bestsellers.
free and paid categeory available.
email confirmation.

👤 User  Portals
Authentication: Secure JWT-based signup and login with password hashing.

User Dashboard: Track order history, manage profile details.



🎨 Design & UI
Responsive Layout: Fully optimized for Mobile, Tablet, and Desktop.

Dark Mode Support: Toggle between light and dark themes for comfortable reading.

Toasts & Notifications: Real-time feedback for actions like "Enquiry."

🛠️ Tech Stack
Frontend
React.js (Hooks, Functional Components)

Tailwind CSS (Modern Styling)

Axios (API Communication)

React Router (Client-side Navigation)

Backend
Node.js & Express

MongoDB & Mongoose (Data Modeling)

Bcrypt.js (Security)

Cloudinary (Image hosting for book covers)

🚀 Quick Start
1. Prerequisites
Node.js (v16+)

MongoDB Atlas Account

2. Environment Variables
Create a .env file in the backend directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_key_here
3. Installation
Bash
# Install for both Frontend and Backend
npm install --prefix backend
npm install --prefix frontend

# Run both concurrently
npm run dev
📁 Project Structure
Plaintext
├── backend/
│   ├── controllers/    # Business logic (Book & User controllers)
│   ├── models/         # Book, User, and Order Schemas
│   ├── routes/         # API Route definitions
│   └── middleware/     # Auth and Error handling
└── frontend/
    ├── src/
    │   ├── components/ # Reusable UI (Navbar, Footer, BookCard)
    │   ├── pages/      # View components (Home, Shop, Cart, Admin)
    │   └── store/      # Global state management
📜 License & Credits

Author: Gaurav Kakpure

