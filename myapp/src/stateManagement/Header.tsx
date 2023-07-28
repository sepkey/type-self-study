import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store/store';
import {
  authenticateAction,
  authenticatedAction,
  authorizeAction,
  authorizedAction,
} from './store/userSlice';
import { authenticate } from './api/authenticate';
import { authorize } from './api/authorize';

export function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  async function handleSignInClick() {
    dispatch(authenticateAction());
    const authenticatedUser = await authenticate();
    dispatch(authenticatedAction(authenticatedUser));
    if (authenticatedUser !== undefined) {
      dispatch(authorizeAction());
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch(authorizedAction(authorizedPermissions));
    }
  }
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
