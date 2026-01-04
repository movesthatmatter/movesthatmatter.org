import Logo from '../Logo/Logo';
import { Link } from './components/Link';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row pb-4 text-black">
      <Logo />
      <nav className="flex flex-1 flex-col sm:flex-row sm:align-center pl-4 sm:items-end sm:justify-end gap-4">
        <Link href="/manifesto">Manifesto</Link>
        <Link href="/inspiration" className="hover:font-bold hover:underline">
          Inspiration
        </Link>
        <Link href="/ideas" className="hover:font-bold hover:underline">
          Ideas
        </Link>
        <Link href="/actions" className="hover:font-bold hover:underline">
          Actions
        </Link>
        <Link href="/blog" className="hover:font-bold hover:underline">
          Blog
        </Link>
        <Link href="/contributors" className="hover:font-bold hover:underline">
          Contributors
        </Link>
      </nav>
    </header>
  );
}
