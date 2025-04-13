import {
  signUp,
  signIn,
  signOut,
  fetchAuthSession,
  getCurrentUser,
  confirmSignUp,
  resendSignUpCode,
} from "aws-amplify/auth";
export const signUpWithCognito = async (email: string, password: string) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: { userAttributes: { email: email } },
    });
    console.log(userId);
    console.log(nextStep);
    if (isSignUpComplete) {
      console.log("Sign up successful");
      return { isSignUpComplete, userId, nextStep };
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occurred");
  }
};
export const signInWithCognito = async (email: string, password: string) => {
  try {
    const result = await signIn({
      username: email,
      password,
    });
    if (result.isSignedIn) {
      console.log("Sign in successful");
      // await refreshUser();
      // navigate("/")
    } else {
      console.log(result.nextStep);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const signOutFromCognito = async () => {
  try {
    await signOut(); // Amplify Auth の signOut を呼び出す
    console.log("Signed out successfully");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred during sign out");
  }
};

export const confirmSignUpWithCognito = async (email: string, code: string) => {
  try {
    await confirmSignUp({ username: email, confirmationCode: code });
    console.log("Confirmation successful");
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const resendConfirmationCode = async (email: string) => {
  try {
    await resendSignUpCode({ username: email });
    console.log("Confirmation code resent");
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occurred");
  }
};
