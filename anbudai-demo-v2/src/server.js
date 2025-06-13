
import express from "express";
import { PrismaClient } from "@prisma/client";
import { fortnox } from "./routes/fortnox.js";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use("/api/fortnox", fortnox);

// Simple health check & DB test
app.get("/api/health", async (_req, res) => {
  try {
    const companies = await prisma.company.count();
    res.json({ status: "ok", dbConnected: true, companies });
  } catch (err) {
    res.status(500).json({ status: "db_error", error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 API up on :${port}`));
