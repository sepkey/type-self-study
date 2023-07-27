import { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { User } from './models';
import { authenticate } from './api/authenticate';
import { authorize } from './api/authorize';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};

type Action =
  | {
      type: 'loading';
    }
  | {
      type: 'authenticated';
      user: User | undefined;
    }
  | {
      type: 'authorized';
      permissions: string[];
    };

type AppContextType = State & { handleSignIn: () => Promise<void> };

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'authenticated':
      return { ...state, loading: false, user: action.user };
    case 'authorized':
      return { ...state, loading: false, permissions: action.permissions };
    default:
      return state;
  }
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const [{ user, permissions, loading }, dispatch] = useReducer(reducer, initialState);

  async function handleSignIn() {
    dispatch({ type: 'loading' });
    const user = await authenticate();
    dispatch({ type: 'authenticated', user });
    if (user !== undefined) {
      dispatch({ type: 'loading' });
      const permissions = await authorize(user.id);
      dispatch({ type: 'authorized', permissions });
    }
  }
  return (
    <AppContext.Provider
      value={{
        user,
        permissions,
        loading,
        handleSignIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext) as AppContextType;
