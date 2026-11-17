// VEX User Authentication & Session Manager
export interface VexUser {
  id: string;
  email: string;
  name: string;
  token: string;
  endpoints: Array<{ name: string; url: string; token?: string }>;
  activeEndpoint: string;
}

const USER_STORAGE_KEY = 'vex_user_session';

export function getStoredUser(): VexUser | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function loginUser(email: string, password: string): VexUser {
  const user: VexUser = {
    id: 'usr_' + Math.random().toString(36).substring(2, 9),
    email,
    name: email.split('@')[0],
    token: 'vex_jwt_' + Math.random().toString(36).substring(2, 16),
    endpoints: [
      { name: 'VEX Production RPC', url: 'http://167.172.215/rpc' },
      { name: 'VEX Devnet #1', url: 'https://rpc.devnet.vex.network/v1' },
      { name: 'Localhost', url: 'http://localhost:8545/rpc' }
    ],
    activeEndpoint: 'http://167.172.215/rpc'
  };
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function signupUser(email: string, password: string): VexUser {
  return loginUser(email, password);
}

export function logoutUser(): void {
  localStorage.removeItem(USER_STORAGE_KEY);
}