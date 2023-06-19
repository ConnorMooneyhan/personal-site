import { getPosts } from "../../../sanity";
import "./styles.css";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <h2>Blog</h2>
      <p>Read about my adventures in learning mathematics</p>
      <ol>
        {posts.map((post) => (
          <a href={`/blog/${post.slug.current}`} key={post.slug.current}>
            {post.title}
          </a>
        ))}
      </ol>
    </div>
  );
}
