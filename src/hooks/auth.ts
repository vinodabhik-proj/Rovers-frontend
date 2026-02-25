// hooks/useAuth.ts
import { useEffect, useState } from "react";
import type { User } from "../models";
import { getUser, userLogout } from "../services/AuthService";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        const res = await getUser();
        if (isMounted) {
          setUser(res);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const logout = async () => {
    await userLogout();
    setUser(null);
  };

  return { user, loading, logout };
}
