import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <h1>Kaku</h1>
      <Image
        src={Logo}
        alt="Kaku Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
