const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const service = client.db("plumboy").collection("services");
const users = client.db("plumboy").collection("users");
const reviews = client.db("plumboy").collection("reviews");
const connectDB = () => {
  client.connect(async (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Mongodb Contented");
    }
  });
};
module.exports = { connectDB, service, users, reviews };
