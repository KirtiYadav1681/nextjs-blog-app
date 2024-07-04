import { MongoClient, ObjectId } from "mongodb";

export async function DELETE(request, { params }) {
  const { id } = params;
    console.log(id, "id cvsdgbzcjnmkcl,")
  
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    const db = client.db("next-js-blog-app-data");
    const collection = db.collection("blog-data");

    const blog = await collection.findOne({ _id: new ObjectId(id) });
    console.log(blog, "blog")

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

    await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog Deleted successfully",
      }),
      {
        status: 200,
        "Content-Type": "application/json",
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
        "Content-Type": "application/json",
      }
    );
  }
}
