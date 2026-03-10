const express = require('express');
const bookRoutes = require('./Routes/books.route.js');
const authRoutes = require('./Routes/auth.routes.js');
const contactRoute = require("./Routes/contact.route.js");
const dotenv = require("dotenv");
const cors = require('cors');
const ConnectDB = require('./Config/db');

dotenv.config();
ConnectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Updated CORS Configuration
// Replace the URL with your actual Vercel frontend URL once deployed
app.use(cors({
    origin: ["https://bookstore-two-ochre.vercel.app/", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);
app.use("/contact", contactRoute);

app.get((req,res)=>{
    res.send("Server is up")
});
// 2. Export the app for Vercel
// This is critical for Vercel's serverless functions to work
module.exports = app;

// 3. Conditional Listen
// Only run app.listen if we are NOT on Vercel (local development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is up and running at port http://localhost:${PORT}`);
    });
}

