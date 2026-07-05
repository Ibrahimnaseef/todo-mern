import express from 'express';
import dotenv from "dotenv";
import dns from 'dns';
import { connectDB } from './config/db.js';
import Todo from './models/todo.model.js';
import path from "path";
import todoRoutes from "./routes/todo.routes.js"
const PORT= process.env.PORT || 5000;

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const app = express();
app.use(express.json());
// app.get("/", (req, res) => { 
//     res.send("server ready");
// });

app.use("/api/todos",todoRoutes);

const __dirname=path.resolve();

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    });
}

app.listen(PORT, () => {  
    connectDB();
    console.log("Server started at http://localhost:5000");
});