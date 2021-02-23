const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const PORT = process.env.PORT || 5000; //$ export PORT=3030
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../src/build')));

const dataPath = path.join(__dirname, "data.json");

app.get("/data", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}............./`);
});
