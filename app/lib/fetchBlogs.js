export async function fetchBlogs() {
    const res = await fetch("http://127.0.0.1:3000/api/all-blogs");
    return res.json();
}

export async function fetchBlogDetail(id) {
    const res = await fetch(`http://127.0.0.1:3000/api/blog-details/${id}`);
    return res.json();
}
