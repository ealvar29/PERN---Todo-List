const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Routes

//Create a Todo
app.post("/todos", async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
  }
});

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started");
});
