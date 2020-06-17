import MongoDB from "mongodb";
import dotenv from "dotenv";
dotenv.config();

/* Connect and authenticate */
console.log("[INIT] Connecting to MongoDB Atlas...");

const MongoClient = MongoDB.MongoClient;
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    console.error(err);
  }
  const test_db = client.db("test-db");
  test_db.createCollection("rules", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      console.log("Mongo collection created.");
      client.close();
    }
  });
});

export { client };
