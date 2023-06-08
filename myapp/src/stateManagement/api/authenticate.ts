export type User = { id: string; name: string };

export function authenticate(): Promise<User> | undefined {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bobi' }), 1000));
}

export default authenticate;
