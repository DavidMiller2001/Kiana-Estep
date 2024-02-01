"use client";
import { api } from "~/trpc/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-8 text-3xl font-bold">
      <h2>Loading...</h2>
    </div>
  );
};

const Page = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURI(params.slug);
  const {
    data: post,
    isError,
    isLoading,
  } = api.post.getOne.useQuery({
    title: decodedSlug,
  });

  if (isLoading) {
    return <Loading />;
  }
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
