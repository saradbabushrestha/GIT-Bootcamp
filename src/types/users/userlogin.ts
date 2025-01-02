export type User = {
  id: string | null ;
  username: string;
  email: string;
  role: "user" | "admin" | "superadmin" ;
};
