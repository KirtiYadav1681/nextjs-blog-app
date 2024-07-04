export async function fetchBlogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-blogs`);
    return res.json();
}

export async function fetchBlogDetail(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog-details/${id}`);
    return res.json();
}
