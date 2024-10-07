const express = require("express");
const userModel = require("./userModel");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());
// Add this middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  let testUser = userModel.create({
    firstField: "test",
    password: "test"
  });
  res.json({ success: true, msg: "User Created Successfully", id: testUser._id });
});

app.post("/login", (req, res) => {
  // Now, req.body will be parsed as JSON
  let { firstField, password } = req.body;
  console.log(firstField, password);
  let user = userModel.create({
    firstField,
    password
  });
  res.json({ success: true, msg: "User Login Successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Ip : 106.222.213.117
// dG5cEnZOyzZSLoGA
// mahdifarooqui78