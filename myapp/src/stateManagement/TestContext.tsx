import { createContext } from 'react';

type Theme = {
  name: string;
  color: 'dark' | 'light';
};
type ThemeContextType = Theme & {
  changeTheme: (name: string, color: 'dark' | 'light') => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);
