// this is the props need for the table actions like delete, promote and demote
// this is used in both the admin table and the users table
import { User } from "../../types/users/users";

// I am using onDelete?. here because I want to make it optional and more reusable. 
export interface UserTableProps {
  users: User[];
  onDelete?: (id: string) => void;
  onPromote?: (id: string) => void;
  onDemote?: (id: string) => void;
}

// I have used this in both UserTable.tsx and AdminTable.tsx