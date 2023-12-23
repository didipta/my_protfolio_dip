const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jpoqt1r.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const cateproyCollection = client
      .db("pc-builder-assignment-6")
      .collection("portfolio_project_2");
    const productCollection = client
      .db("pc-builder-assignment-6")
      .collection("product");

    if (req.method === "GET" && req.query.Id) {
      const { Id } = req.query;
      const category = await productCollection.findOne({
        id: parseInt(Id),
      });
      res.send({ message: "success", status: 200, data: category });
    } else if (req.method === "GET") {
      const category = await cateproyCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: category });
    }

    //category by id
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
