
export interface UserLoginRequest {
  email: string
  password: string
}

export interface UserLoginResponse {
  _id:           string;
  name:          string;
  email:         string;
  isActive:      boolean;
  lastLoginTime: Date;
  createdAt:     Date;
  updatedAt:     Date;
}
