import { MongoClient } from "mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const data = body;

    // Add createdAt timestamp
    data.createdAt = new Date(); // Add current timestamp

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db("next-js-blog-app-data");
    const collection = db.collection("blog-data");

    await collection.insertOne(data);

    client.close();

    return new Response(
      JSON.stringify({ success: true, message: "Blog added successfully." }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong.",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
