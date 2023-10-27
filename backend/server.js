import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

// app.get ('/')
const uploadDestination = path.join(path.dirname(__filename), "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDestination);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static(uploadDestination));

app.post("/images", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    res.status(200).send("File uploaded successfully.");
  } catch (error) {
    res.status(500).send("File upload failed.");
  }
});

app.use((error, req, res) => {
  res.status(error.statusCode).json({ success: false, error: error.message });
});

app.use((req, res) => {
  res.status(404).json({ success: false, msg: "404, Page Not Found." });
});

app.listen(port, () => console.log(`Server stared on port ${port}*`));
