import { Link, NavLink, useSearchParams, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import logo from './image/logo.png';

export function Header() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();

  const nav = useNavigate();
  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;

    // setSearchParams({ search: search });
    nav(`/products/?search=${search}`);
  }
  return (
    <header
      className="text-center text-slate-900
  bg-slate-200 h-40 p-5"
    >
      <form className="relative text-right" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          name="search"
          placeholder="search"
          defaultValue={searchParams.get('search') ?? ''}
          className="absolute right-0 top-0 rounded py-2 px-3
text-gray-700"
        />
      </form>
      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>
      <Link to="">
        <h1 className="text-2xl">React Tools</h1>
      </Link>

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
