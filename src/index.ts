import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoute";


//load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
app.use('/static',express.static(path.join(__dirname,'../dist/public')));

app.use("/",studentRoute);

mongoose.connect(process.env.MONGOOSE_URI as string)
.then(() => console.log('mongodb connected'))
.catch(() => console.log('could not connect mongodb'))

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})