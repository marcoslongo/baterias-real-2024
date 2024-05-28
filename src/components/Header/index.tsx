import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container flex justify-between">
        <Link href="href">logo</Link>
        <nav>
          <ul className="flex">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
