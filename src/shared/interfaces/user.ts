
export interface User {
  id: number;
  name: string;
  email: string;
  lastLoginTime: string; // ISO 8601 date format
  registrationTime: string; // ISO 8601 date format
  status: 'active' | 'blocked';
}
