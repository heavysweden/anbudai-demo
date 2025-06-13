
import express from "express";
import { fortnox } from "./routes/fortnox.js";

const app = express();

app.use(express.json());
app.use("/api/fortnox", fortnox);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 API up on :${port}`));
