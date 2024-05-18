
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import morgan from "morgan";
import router from "./Route/routes.js";
import imagerouter from "./Controller/image-controller.js";



dotenv.config()
const app = express();


app.use(express.json())
app.use(cors({origin:true,credentials:true}))

app.use(morgan('tiny'))
app.disable('x-powered-by')



app.use('/api',router)
app.use('/api',imagerouter)

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server Connected to ${port}`)
})
app.get("/",(req,res)=>{
    res.send(`Web server Is Hoisted In ${port} Port Number`)
})


mongoose.set('strictQuery',false);
mongoose.connect(process.env.URL).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
