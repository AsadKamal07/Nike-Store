import { headerLogo } from '../assets/images/';
import { hamburger } from '../assets/icons/';
import { navLinks } from '../constaints';

const Navbar = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10">
      <nav className="max-container flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Logo" />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="Hamburger" />
        </div>
        <div className="">
          <a href="/">Sign In/Account</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar