import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const uploadDestination = path.join(path.dirname(__filename), "../images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDestination);
  },
  filename: (req, file, cb) => {
    cb(null, `image7${Date.now()}.${getFileFormat(file)}`);
  },
});

export const upload = multer({ storage: storage });

const getFileFormat = (file) => file.mimetype.split("/")[1];
