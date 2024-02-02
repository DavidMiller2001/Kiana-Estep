import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
      <main className="">
        <div className="m-auto flex w-full max-w-6xl justify-center">
          <div className="grid-container grid flex-1 grid-cols-3 grid-rows-3 gap-4 p-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>
      </main>
    </>
  );
}
