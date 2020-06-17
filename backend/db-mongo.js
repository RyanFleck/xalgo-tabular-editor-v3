import MongoDB from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let insertionTest = true;
let retrievalTest = true;

/* Connect and authenticate */
console.log("[INIT] Connecting to MongoDB Atlas...");

const MongoClient = MongoDB.MongoClient;
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const data = [
  {
    meta: {
      date: "today",
      country: "CA",
      name: "GST",
    },
  },
  {
    meta: {
      date: "tomorrow",
      country: "CA",
      name: "Carbon Tax",
    },
  },
];

/*
client.connect((err, client) => {
  if (err) throw err;
  // Connection succeeded.
  console.log("[SUCCESS] Connected to MongoDB");
  const dbo = client.db("test-db");
  dbo.collection("up-test").insertMany(data, (err, res) => {
    if (err) throw err;
    // Attempt to insert data into up-test collection.
    dbo
      .collection("up-test")
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        console.log(results);
      });
  });
});
*/

client.connect((err, client) => {
  if (err) throw err;
  const dbo = client.db("test-db");
  const col = dbo.collection("up-test");
  col.find().toArray((err, results) => {
    if (err) throw err;
    console.log(results);
  });
});

export { client };
