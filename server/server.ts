import express from "express";
import bodyparser from "body-parser";
import { cyklar } from "./endpoints";

const app = express();
const PORT = 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Busenkel Express server med Typescript");
});

app.all("/cyklar", cyklar);

app.listen(PORT, () => {
  console.log(`⚡ Server is up and running at: https://localhost:${PORT} ⚡️`);
});