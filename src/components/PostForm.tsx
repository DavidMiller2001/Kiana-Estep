"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "~/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must not be empty",
  }),
  content: z.string().min(1, {
    message: "Content must not be empty",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const PostForm = () => {
  const router = useRouter();
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const postForm = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormSchema) => {
    createPost.mutate(values);
    postForm.reset();
  };

  return (
    <form className="flex flex-col" onSubmit={postForm.handleSubmit(onSubmit)}>
      <input
        {...postForm.register("title")}
        type="text"
        placeholder="title"
        className="border p-2"
      />
      {postForm.formState.errors.title && (
        <p>{`${postForm.formState.errors.title.message}`}</p>
      )}
      <textarea
        {...postForm.register("content")}
        placeholder="pookie talk <3"
        className="border p-2"
      />
      <button
        disabled={postForm.formState.isSubmitting}
        type="submit"
        className=" rounded-lg bg-purple-300 px-4 py-2 text-lg font-bold disabled:opacity-55"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
