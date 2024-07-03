export async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/all-blogs");
  if (!res.ok) {
    throw new Error("Featured blog not found.");
  }
  return res.json();
}
