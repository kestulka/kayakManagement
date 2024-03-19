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

app.use("/api/reservations", require("./routes/reservationRoutes"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/kayaks", require("./routes/kayakRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`),
);
