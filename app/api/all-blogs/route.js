import { MongoClient } from "mongodb";

export async function GET(request) {
  const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("next-js-blog-app-data");
    const collection = db.collection("blog-data");

    const allBlogs = await collection.find({}).toArray();
    return new Response(
      JSON.stringify({
        success: true,
        message: "Fetched all blogs successfully.",
        allBlogs,
      }),
      {
        status: 200,
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
  } finally {
    await client.close();
  }
}
