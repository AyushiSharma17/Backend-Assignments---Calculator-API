const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { text } = require("express");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", (req, res) => {
  let num1 = req.body["num1"];
  let num2 = req.body["num2"];
  const result = num1 + num2;
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    res.send({ status: "error", message: "Underflow" });
  } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    res.send({ status: "error", message: "Overflow" });
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    res.send({ status: "error", message: "Invalid data types" });
  } else {
    res.send({
      status: "success",
      message: "the sum of given two numbers",
      sum: result,
    });
  }
});

app.post("/sub", (req, res) => {
  let num1 = req.body["num1"];
  let num2 = req.body["num2"];
  const result = num1 - num2;
  if (num1 < -1000000 || num2 < -1000000) {
    res.send({ status: "error", message: "Underflow" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.send({ status: "error", message: "Overflow" });
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    res.send({ status: "error", message: "Invalid data types" });
  } else {
    res.send({
      status: "success",
      message: "the difference of given two numbers",
      difference: result,
    });
  }
});
app.post("/multiply", (req, res) => {
  let num1 = req.body["num1"];
  let num2 = req.body["num2"];
  const result = num1 * num2;
  if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
    res.send({ status: "error", message: "Underflow" });
  } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
    res.send({ status: "error", message: "Overflow" });
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    res.send({ status: "error", message: "Invalid data types" });
  } else {
    res.send({
      status: "success",
      message: "The product of given numbers",
      result: result,
    });
  }
});
app.post("/divide", (req, res) => {
  let num1 = req.body["num1"];
  let num2 = req.body["num2"];
  const result = num1 / num2;
  if (num1 < -1000000 || num2 < -1000000) {
    res.send({ status: "error", message: "Underflow" });
  } else if (num1 > 1000000 || num2 > 1000000) {
    res.send({ status: "error", message: "Overflow" });
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    res.send({ status: "error", message: "Invalid data types" });
  } else if (num2 === 0) {
    res.send({ status: "error", message: "Cannot divide by zero" });
  } else {
    res.send({
      status: "success",
      message: "The division of given numbers",
      result: result,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;