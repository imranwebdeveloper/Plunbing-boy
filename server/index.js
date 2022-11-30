const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const { connectDB, users, service, reviews } = require("./config/mongo");
const secrete = process.env.SECRETE_KYE;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello Developer");
});

// User Authentication Middleware
const verifyUser = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(400).send({ status: false, massage: "Unauthorized" });
  }
  const token = authToken.split(" ")[1];
  jwt.verify(token, secrete, (err, decoded) => {
    if (err) {
      return res.status(401).send({ massage: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

// User Route
app.get("/user", verifyUser, async (req, res) => {
  const { foo } = req.decoded;
  const cursor = { email: { $eq: foo } };
  const isUser = await users.findOne(cursor);
  res.send({ user: isUser });
});
// User register router
app.post("/user/register", async (req, res) => {
  const { displayName, photoURL, email, password } = req.body;
  const cursor = { email: { $eq: email } };
  const isUser = await users.findOne(cursor);
  if (isUser) {
    return res.send({
      status: false,
      massage: "You have already an Account. Please try to login",
    });
  }
  const user = await users.insertOne({
    displayName,
    photoURL,
    email,
    password,
  });
  const token = jwt.sign({ foo: email }, secrete);
  res.status(200).send({
    status: "Success",
    token,
    id: user,
    user: { displayName, photoURL, email },
  });
});

// User Login Router
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const cursor = { email: { $eq: email } };
  const isUser = await users.findOne(cursor);
  if (!isUser) {
    return res.send({
      status: false,
      massage: "Your not authorized. Please Registration ",
    });
  }
  const token = jwt.sign({ foo: email }, secrete);
  res.status(200).send({ status: "Success", user: isUser, token });
});

app.post("/user/add-service", async (req, res) => {
  const serviceData = req.body;
  const resData = await service.insertOne(serviceData);
  res.send(resData);
});

// services router
app.get("/services", async (req, res) => {
  const { limit } = req.query;
  let allServices;
  if (limit) {
    const resData = await service.find({}).limit(parseInt(limit));
    allServices = await resData.toArray();
  } else {
    const resData = await service.find({});
    allServices = await resData.toArray();
  }
  res.send(allServices);
});
app.get("/services/:id", async (req, res) => {
  const { id } = req.params;
  const cursor = { serviceId: { $eq: id } };
  const serviceByID = await service.findOne({ _id: ObjectId(id) });
  const serviceReviews = await reviews.find(cursor).sort({ date: -1 });
  const allReviews = await serviceReviews.toArray();
  res.send({ reviews: allReviews, service: serviceByID });
});

// reviews router

app.post("/services/reviews", async (req, res) => {
  const userReviews = req.body;
  const resData = await reviews.insertOne({ date: new Date(), ...userReviews });
  res.send(resData);
});
app.get("/user/reviews", verifyUser, async (req, res) => {
  const user = req.decoded;
  const cursor = { user: { $eq: user.foo } };
  const allReviews = await reviews.find(cursor);
  const resData = await allReviews.toArray();
  res.send(resData);
});
app.patch("/user/reviews", async (req, res) => {
  const id = req.query;
  const data = req.body;
  const filter = { _id: ObjectId(id) };
  const update = { $set: { comment: data.comment, rating: data.rating } };
  const resData = await reviews.updateOne(filter, update);
  res.send(resData);
});
app.delete("/user/reviews", async (req, res) => {
  const { id } = req.query;
  if (!id) return;
  const resData = await reviews.deleteOne({ _id: ObjectId(id) });
  res.status(200).send({ statusbar: true });
});

// server
app.listen(process.env.PORT || 5001, () => {
  console.log(`Server listening on ${process.env.PORT}`);
  connectDB();
});
