"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

const DeleteButton = (props: { id: number }) => {
  const router = useRouter();
  const deletePost = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const handleClick = () => {
    deletePost.mutate({ id: props.id });
  };
  return <button onClick={handleClick}>X</button>;
};

export default DeleteButton;
