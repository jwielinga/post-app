export const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=5"
  );
  return res.json();
};
