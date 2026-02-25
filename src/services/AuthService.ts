import type { User } from "../models";
import getApiUrl from "../hooks/apiUrl";

const API_URL = getApiUrl();

export async function getUser(): Promise<User | null> {
  try {
    const res = await fetch(`${API_URL}/auth/user`, { 
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      console.log('Failed to fetch user:', res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function userLogout(): Promise<void> {
  try {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error('Error logging out:', error);
  }
}