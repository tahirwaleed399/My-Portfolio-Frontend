import User from "./User";

export type userState = {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string | null;
    user: User | null;
    isAuthenticated: boolean | null;
  };