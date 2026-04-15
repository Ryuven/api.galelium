const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// тест
app.get("/", (req, res) => {
  res.send("API работает");
});

// тест JSON
app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});