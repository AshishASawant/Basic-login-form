// express specific stuff
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 2022;

//
const app = express();

//
app.use(express.json());
app.use(cors());

//mongoose specific stuff- connecting to database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/allusers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to mongo successfull");
  });

// creating user schema
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

// creating user model
const User = mongoose.model("User", userSchema);

//register a new user
app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      res.send({ msg: "User already exists" });
    } else {
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        (err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ msg: "User create" });
          }
        }
      );
    }
  });
});

//login the user
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user && user.password === req.body.password) {
      res.send({ msg: "Login success", user });
    } else {
      res.send({ msg: "User not registered" });
    }
  });
});

//
app.listen(port, () => {
  console.log(`succesfully connected on port ${port}`);
});
