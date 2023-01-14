const { response } = require("express");
const express = require("express");

const app = express();
app.get("/", (require, response) => {
  response.send("hello world");
});
app.listen(3000, () => console.log("http:localhost:3000"));
