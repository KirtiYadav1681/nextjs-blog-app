import { MongoClient, ObjectId } from "mongodb";

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const data = body;

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db("next-js-blog-app-data");
    const collection = db.collection("blog-data");

    const blog = await collection.findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Blog not found",
        }),
        {
          status: 404,
          "Content-Type": "application/json",
        }
      );
    }

    const updatedBlog = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnOriginal: false }
    );
    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog updated successfully",
        blog: updatedBlog.value,
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
        message: "Something went wrong",
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
