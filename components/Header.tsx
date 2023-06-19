import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Connor Mooneyhan</h1>
      <nav>
        <Link href="/about-me">About Me</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
