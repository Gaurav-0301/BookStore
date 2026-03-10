const express=require('express')
const bookRoutes=require('./Routes/books.route.js')
const authRoutes=require('./Routes/auth.routes.js')
const contactRoute=require( "./Routes/contact.route.js")
const dotenv=require("dotenv")
dotenv.config();
const ConnectDB=require('./Config/db');
ConnectDB();
const cors=require('cors');

const app=express()
const PORT=process.env.PORT;
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books',bookRoutes);
app.use('/auth',authRoutes);
app.use("/contact", contactRoute);


app.listen(PORT,(req ,res)=>{
    console.log(`Server is up and running at port http://localhost:${PORT}`)
})