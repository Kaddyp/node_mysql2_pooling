const express = require('express');
const app = express();
app.use(express.json());
const conn = require('./storage/connection');
const UserRoutes = require("./users/routes");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api", UserRoutes);
app.listen('5555', (req, res) => {
    //connectDB();
    console.log('Server is running on port 5555');
});