// admin.ts also uses from the users.ts

export interface User {
    id: number;
    name: string;
    email: string;
    role: "user" | "admin";
  }
  