require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectToDB = require("./config/db");

connectToDB();

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/reservations", require("./routes/reservationRoutes"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/kayaks", require("./routes/kayakRoutes"));

app.use(errorHandler);

const port = process.env.PORT || 3333;
app.set("port", port);

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/employees", (req, res) => {
  res.sendFile(__dirname + "/employees.html");
});
app.get("/clients", (req, res) => {
  res.sendFile(__dirname + "/clients.html");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
