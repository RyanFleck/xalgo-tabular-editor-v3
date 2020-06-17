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

/* Test service when app is started */

const now = new Date();
const verifyWithString = `TIME${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;

client.connect((err, client) => {
  if (err) throw err;
  const dbo = client.db("test-db");
  const col = dbo.collection("up-test");

  console.log("[TEST] MongoDB: Inserting document...");
  console.log(` -> { storedString: ${verifyWithString} }`);
  col.insert({ verNum: 5, storedString: verifyWithString }, (err, result) => {
    if (err) throw err;
    console.log("[TEST] MongoDB: Retrieving document...");
    col.find({ verNum: 5 }).toArray((err, results) => {
      if (err) throw err;
      console.log(results);
      console.log("[TEST] MongoDB: Deleting document...");
      col.deleteMany({ verNum: 5 }, (err, res) => {
        if (err) throw err;
        console.log(` -> Deleted ${res.deletedCount}`);
        console.log("[SUCCESS] MongoDB ready for use.");
        client.close();
      });
    });
  });
});

export { client };
