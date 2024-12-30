export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  rePassword: string;
  rememberMe: boolean;
  acceptTerm: boolean;
  role: "user" | "admin" | "superadmin";
};
