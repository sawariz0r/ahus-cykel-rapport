import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Busenkel Express server med Typescript");
});

app.listen(PORT, () => {
  console.log(`⚡ Server is up and running at: https://localhost:${PORT} ⚡️`)
})