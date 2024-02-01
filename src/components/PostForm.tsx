"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "~/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const postSchema = z.object({
  title: z.string().min(1, {
    message: "Title must not be empty",
  }),
  content: z.string().min(1, {
    message: "Content must not be empty",
  }),
});

type PostSchema = z.infer<typeof postSchema>;

const PostForm = () => {
  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const router = useRouter();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onSubmit = (values: PostSchema) => {
    createPost.mutate(values);
    postForm.reset();
  };

  return (
    <Form {...postForm}>
      <form onSubmit={postForm.handleSubmit(onSubmit)} className="p-4">
        <FormField
          control={postForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Kiana's blog post!" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={postForm.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder="Whatever pookie feels like talking about <3"
                {...field}
              />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Post!
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
