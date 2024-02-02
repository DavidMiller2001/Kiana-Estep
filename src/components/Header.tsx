import { Instagram } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-purple-300 py-4">
        <div className="m-auto flex w-full max-w-6xl justify-between px-4 xl:px-0">
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
                <Link href="/blog">Blog</Link>
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
    </>
  );
};

export default Header;
