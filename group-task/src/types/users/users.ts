type Post = {
  id: string;
  name: string;
  text: string;
};

export type User = {
  id:string ;
  name: string;
  email: string;
  password: string;
  role: string;
  feed: Post[]; 
};