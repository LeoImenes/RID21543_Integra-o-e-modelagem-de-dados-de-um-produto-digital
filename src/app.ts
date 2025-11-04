// src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bookRoutes from "./routes/booksRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/livros", bookRoutes);

export default app;
