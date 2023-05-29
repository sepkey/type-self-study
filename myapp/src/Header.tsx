import { NavLink } from 'react-router-dom';
import logo from './image/logo.png';

export function Header() {
  return (
    <header
      className="text-center text-slate-900
  bg-slate-200 h-40 p-5"
    >
      <img src={logo} alt="Logo" className="inline-block h-20" />
      <h1 className="text-2xl">React Tools</h1>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-slate-600 no-underline p-1 pb-0.5 border-solid
border-b-2 ${isActive ? 'border-cyan-600' : 'border-transparent'}`
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}
