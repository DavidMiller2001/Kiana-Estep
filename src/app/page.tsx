import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { Instagram } from "lucide-react";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
      <header className="sticky top-0 bg-purple-300 py-4">
        <div className="m-auto flex w-full max-w-6xl justify-between">
          <img src="/" alt="Logo" />
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="#">Work</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Commision</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
            </ul>
          </nav>
          <Link target="none" href="https://instagram.com/a_random_voyager">
            <Instagram />
          </Link>
        </div>
      </header>
      <main className="">
        <div className="m-auto w-full max-w-6xl">Testing</div>
      </main>
    </>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
