export async function fetchBlogs() {
    const res = await fetch(`${process.env.API_URL}/all-blogs`);
    return res.json();
}

export async function fetchBlogDetail(id) {
    const res = await fetch(`${process.env.API_URL}/blog-details/${id}`);
    return res.json();
}
