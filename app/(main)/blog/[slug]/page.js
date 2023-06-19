import { PortableText } from "@portabletext/react";
import { q } from "../../../../sanity";

export default async function Page({ params }) {
  const post = await q(
    `*[slug.current == "${params.slug}"][0]`
  );

  return (
    <div>
      <h3>{post.title}</h3>
      <PortableText value={post.body} />
    </div>
  );
}
