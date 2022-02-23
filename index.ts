import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  let weight = req.query.weight;
  let height = req.query.height;

  if (!weight || !height) {
    res.send({
      error: "malformatted parameters",
    });
  }
  const value = calculateBmi(Number(height), Number(weight));
  res.send(value);
});

app.get("/exercise", (req, res) => {
  let weight = req.query.weight;
  let height = req.query.height;

  if (!weight || !height) {
    res.send({
      error: "malformatted parameters",
    });
  }
  const value = calculateBmi(Number(height), Number(weight));
  res.send(value);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
