import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="flex pb-4 text-black">
      <Logo />
      <div className="flex flex-1 items-center align-center sbg-red-100 pl-4 items-end justify-end">
        <a href="/manifesto" className='hover:font-bold'>Manifesto</a>
      </div>
    </header>
  );
}
