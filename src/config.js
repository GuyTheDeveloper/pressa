import dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();

const accessLogStream = fs.createWriteStream(
  path.join(process.cwd(), "access.log"),
  {
    flags: "a",
  }
);

const pgConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
};

const SECRET = process.env.JWT_SECRET;

const PORT = process.env.PORT ?? 5000;

export { PORT, pgConfig, SECRET, accessLogStream };
