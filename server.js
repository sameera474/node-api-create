require("dotnev").config();
const express = require("express");
const mongoose = require("mongoose");
const developerRoute = require("./routs/developerRoute");
const { default: mongoose } = require("mongoose");

// express app

const app = express();
//middle ware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes

app.use("/api/developers", developerRoute);

//connection 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3001");
    });
  })
  .catch((error) => {
    console.log("the error", error);
  });

// mongoose.connect(
//   "mongodb+srv://sameerafinland:<password>@cluster0.8hibtsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );
