import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "client")));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "GameBoost Tools backend is live 🚀" });
});

// Default route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
