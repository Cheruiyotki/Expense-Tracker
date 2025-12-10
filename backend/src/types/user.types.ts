
// list user types here
export interface  User {
  user_id: number;                  
  username: string;                 
  email: string;                   
  password_hash: string;            
}

// Update user type
export interface UpdateUser {
   username: string;
  email: string;
  password_hash: string;
}

// New user type
export interface NewUser {
  username: string;
  email: string;
  password_hash: string;
}