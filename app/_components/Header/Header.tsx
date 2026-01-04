import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="flex pb-4 text-black">
      <Logo />
      <div className="flex flex-1 items-center align-center sbg-red-100 pl-4 items-end justify-end gap-4">
        <a href="/manifesto" className="hover:font-bold hover:underline">
          Manifesto
        </a>
        <a href="/inspiration" className="hover:font-bold hover:underline">
          Inspiration
        </a>
        <a href="/ideas" className="hover:font-bold hover:underline">
          Ideas
        </a>
        <a href="/actions" className="hover:font-bold hover:underline">
          Actions
        </a>
        <a href="/blog" className="hover:font-bold hover:underline">
          Blog
        </a>
      </div>
    </header>
  );
}
