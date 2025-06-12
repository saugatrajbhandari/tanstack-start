export async function fetchPosts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return await res.json();
  } catch (error) {
    console.log(error, "error");
  }
}
