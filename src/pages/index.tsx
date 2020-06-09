import { GetStaticProps } from "next";
import Link from "next/link";
import { getPosts } from "utils/Posts";

type PostType = {
  id: string;
  title: string;
  date: string;
};

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <>
      <h1>Welcome to ryukalice.com</h1>
      <section>
        <Link href="/blog">
          <h2>
            <a>Blog</a>
          </h2>
        </Link>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getPosts() } };
};
