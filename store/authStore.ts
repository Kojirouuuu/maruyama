import { create } from "zustand";
import { 
  signUpWithCognito, 
  signInWithCognito, 
  signOutFromCognito,
  confirmSignUpWithCognito,
  resendConfirmationCode,
  getAdminStatus,
} from "@/lib/aws/auth";
type AuthStore = {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  isAdmin: boolean;
  //　認証機能
  signUp: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getAdminStatus: () => Promise<boolean>;
  
  // 確認コード入力用
  emailForVerification: string | null;
  setEmailForVerification: (email: string) => void;
  confirmSignUp: (code: string) => Promise<void>;
  resendConfirmationCode: (email: string) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  emailForVerification: null,
  isAdmin: false,

  setEmailForVerification: (email: string) => set({ emailForVerification: email}),

  login: async (email: string, password: string) => {
    set( { loading: true, error: null});
    try {
      await signOutFromCognito();
      
      const user = await signInWithCognito(email,password)
      set({ user: user, isAuthenticated: true, loading: false});

      const isAdmin = await getAdminStatus();
      set({ isAdmin });
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
      set({ emailForVerification: email, loading: false});
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
      set({ user: null, isAuthenticated: false, loading: false, isAdmin: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      }
    }
  },
  confirmSignUp: async (code: string) => {
    const email = get().emailForVerification;
    if (!email) {
      set({ error: "確認用のメールアドレスがありません"});
      return;
    }
    set({ loading: true, error: null });
    try {
      await confirmSignUpWithCognito(email, code);
      set({ loading: false});
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false});
      } else {
        
      }
    }
  },
  resendConfirmationCode: async () => {
    const email = get().emailForVerification;
    if(!email) {
      set({ error: "確認用のメールアドレスがありません"});
      return;
    }
    set({ loading: true, error: null });
    try {
      await resendConfirmationCode(email);
      set({loading: false})
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false});
      } else {
        
      }
    }
  },
  getAdminStatus: async () => {
    if (!get().user) {
      throw new Error("ログインしていません")
    }
    try {
      const isAdmin = await getAdminStatus();
      set({ isAdmin });
      return isAdmin;
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false});
      } else {
        set({ error: "An unknown error occurred", loading: false});
      }
      return false;
    }
  }
}));