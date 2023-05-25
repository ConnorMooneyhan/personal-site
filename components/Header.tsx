import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* <img id="profile-picture" src="/me.jpg" width="100" height="100" /> */}
      <h1>Connor Mooneyhan</h1>
      <nav>
        <Link href="/about-me">About Me</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/pong">Pong</Link>
      </nav>
    </header>
  );
}
