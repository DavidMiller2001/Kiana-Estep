"use client";
import { api } from "~/trpc/react";

const Page = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURI(params.slug);
  console.log(decodedSlug);
  const { data: post, isError } = api.post.getOne.useQuery({
    title: decodedSlug,
  });

  if (isError || !post) {
    return <h1>Post not found :(</h1>;
  }

  return (
    <div className="m-auto w-full max-w-6xl p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Page;
