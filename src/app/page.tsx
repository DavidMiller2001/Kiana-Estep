import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
      <main className="">
        <div className="m-auto w-full max-w-6xl">Testing</div>
      </main>
    </>
  );
}
