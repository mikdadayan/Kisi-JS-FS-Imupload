import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import imagesRouter from "./routes/images/articleAndImageController.js";
import { errorHandler } from "./utils/errorResponse.js";
import { listAvailableRoutes } from "./controllers/listAvailableRoutes.js";

dotenv.config();

const app = express();

app.use(helmet());

const options = {
  origin: "*",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
};

app.use(cors(options));

app.use(express.json());

app.use("/api", imagesRouter);

app.use("/", listAvailableRoutes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ success: false, msg: "404, Page Not Found." });
});

export default app;
