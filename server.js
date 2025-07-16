import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import noteRoutes from "./routes/noteRoutes.js"
dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5174"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());


const PORT = 4000

app.use('/api/notes', noteRoutes);


app.get('/', (req, res) => {
  res.send('Server is Running');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})


