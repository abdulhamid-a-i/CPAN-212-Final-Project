import express from "express";
import cors from "cors";

import booksRouter from "./routes/books.routes.js";
import shipmentRouter from "./routes/shipments.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/books", booksRouter);

app.use("/api/shipments", shipmentRouter)

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;