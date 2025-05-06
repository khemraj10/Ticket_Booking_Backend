const express = require("express");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth.routes");
const connectDB = require("./db/connectDB");
const tripRouter = require("./routes/trip.routes");

const app = express();

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

const port = 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/", tripRouter);

app.listen(port, () => {
  console.log(`App listening on port - ${port}`);
});
