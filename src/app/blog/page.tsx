import Link from "next/link";
import DeleteButton from "~/components/DeleteButton";
import PostForm from "~/components/PostForm";
import { api } from "~/trpc/server";

const Blog = async () => {
  const blogPosts = await api.post.getAll.query();
  return (
    <>
      <main className="m-auto w-full max-w-6xl border-x-2 border-slate-500">
        <PostForm />
        <ul className="flex flex-col gap-4 p-8">
          {blogPosts.map((post) => {
            return (
              <li key={post.title} className="flex justify-between">
                <div>
                  <Link href={`/blog/${post.title}`}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                  </Link>
                  <p>{post.content}</p>
                </div>
                <DeleteButton id={post.id} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Blog;
