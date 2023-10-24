import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="py-8 padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={20}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
            href={item.href}
            className="font-montserrat leading-normal text-lg text-slate-gray"
            >
            {item.label}
            </a>
          </li>
        ))}
        </ul>
        <div className="lg:hidden">
          <img
          src={hamburger}
          alt="hamburger"
          height={20}
          width={20}
          ></img>
        </div>
      </nav>
    </header>
  )
}

export default Nav