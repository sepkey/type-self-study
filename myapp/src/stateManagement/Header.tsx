import { useAppContext } from './AppContext';

export function Header() {
  const { user, loading, handleSignIn: handleSignInClick } = useAppContext();

  return (
    <header
      className="flex justify-between items-center
  border-b-2 border-gray-100 py-6"
    >
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          className="whitespace-nowrap inline-flex itemscenter justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={handleSignInClick}
          disabled={loading}
        >
          {loading ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
