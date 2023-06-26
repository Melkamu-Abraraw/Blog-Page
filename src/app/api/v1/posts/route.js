import connect from "@/utils/db";
import Post from "@/modals/Post";

const { NextResponse } = require("next/server");
const GET = async (req, res) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Error From Database", { status: 500 });
  }
};
export { GET };
