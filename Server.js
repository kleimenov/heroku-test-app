const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const PORT = process.env.PORT || 5000; //$ export PORT=3030
const app = express();
app.use(cors());



const dataPath = path.join(__dirname, "data.json");

app.get("/data", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});


// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}............./`);
});
