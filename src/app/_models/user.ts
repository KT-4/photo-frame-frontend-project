import { Role } from './role';

export interface User {
  _id: any;
  firt_name: string;
  last_name: string;
  avatar: string;
  role: Role;
  email: string;
  token?: string;
}
