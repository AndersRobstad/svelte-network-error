import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  // Fetch random post data from JSONPlaceholder
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${
      Math.floor(Math.random() * 100) + 1
    }`
  );
  const post = await response.json();

  // Fetch random user data
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${
      Math.floor(Math.random() * 10) + 1
    }`
  );
  const user = await userResponse.json();

  return {
    data: {
      post: {
        title: post.title,
        body: post.body,
      },
      user: {
        name: user.name,
        email: user.email,
      },
      timestamp: new Date().toISOString(),
    },
  };
};
