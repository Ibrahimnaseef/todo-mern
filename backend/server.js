import express from 'express';
import dotenv from "dotenv";
import dns from 'dns';
import { connectDB } from './config/db.js';
import Todo from './models/todo.model.js';
import todoRoutes from "./routes/todo.routes.js"

dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const app = express();
app.use(express.json());
// app.get("/", (req, res) => { 
//     res.send("server ready");
// });

app.use("/api/todos",todoRoutes);


app.listen(5000, () => {  
    connectDB();
    console.log("Server started at http://localhost:5000");
});