import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";

const Blog = async () => {
  const blogPosts = await api.post.getAll.query();
  return (
    <>
      <main className="m-auto w-full max-w-6xl border-x-2 border-slate-500">
        <CreatePost />
        <ul className="flex flex-col gap-4 p-8">
          {blogPosts.map((post) => {
            return (
              <li key={post.title} className="">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p>{post.content}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Blog;
