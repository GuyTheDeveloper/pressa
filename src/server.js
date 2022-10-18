import express from "express";
import { accessLogStream, PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";
import modules from "./modules/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(modules);

app.listen(PORT, () =>
  console.log(`🚀 backend server working on http://localhost:${PORT}`)
);
