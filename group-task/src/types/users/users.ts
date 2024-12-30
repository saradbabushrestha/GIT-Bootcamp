export type User = {
    id: string; 
    name: string;
    email: string;
    role: "admin" | "user" | "superadmin";
    feed:Post[];
  };

  export type Post = {
    id: number;  
    name: 'string';
    text: string;
  };