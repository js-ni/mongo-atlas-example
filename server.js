const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();
app.use(express.json()); // Make sure it comes back as json

const database = async () => {
  await mongoose
    .connect(
      "mongodb+srv://user:password@host/test",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(
      () => {
        console.info(`Connected to database`);
      },
      (error) => {
        console.error(`Connection error: ${error.stack}`);
        process.exit(1);
      }
    );
};

database().catch((error) => console.error(error));

app.use(foodRouter);

app.listen(1000, () => {
  console.log("Server is running...");
});
