import { create } from "zustand";
import { signUpWithCognito, signInWithCognito, signOutFromCognito } from "@/lib/aws/auth";
type AuthStore = {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    set( { loading: true, error: null});
    try {
      const user = await signInWithCognito(email,password)
      set({ user: user, isAuthenticated: true, loading: false});
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: "An unknown error occurred", loading: false });
      }
    }
  },
  signUp: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      await signUpWithCognito(email, password);
      set({ loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: "An unknown error occurred", loading: false });
      }
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await signOutFromCognito();
      set({ user: null, isAuthenticated: false, loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
