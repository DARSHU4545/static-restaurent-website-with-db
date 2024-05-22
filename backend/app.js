import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// import reservationRouter from "./routes/reservationRoute.js";
import router from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://darshan-restaurent-website.vercel.app",
    ],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", router);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
  });
});

dbConnection();

export default app;
