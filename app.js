require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const connectToDB = require("./config/db");
const reservationRouter = require("./routes/reservationRoutes");
const clientRouter = require("./routes/clientRoutes");
const kayakRouter = require("./routes/kayakRoutes");

connectToDB();

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));

app.use("/reservations", reservationRouter);
app.use("/clients", clientRouter);
app.use("/kayaks", kayakRouter);

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`),
);
