import { User } from '../models';

export function authenticate(): Promise<User> | undefined {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bobi' }), 1500));
}
