
export interface UserLoginRequest {
  email: string
  password: string
}

export interface UserLoginResponse {
  _id:           string
  name:          string
  email:         string
  isActive:      boolean
  lastLoginTime: string
  createdAt:     string
  updatedAt:     string
}

export interface CreateUserResponse {
  _id:           string
  name:          string
  email:         string
  isActive:      boolean
  lastLoginTime: string
  createdAt:     string
  updatedAt:     string
}

export interface CreateUserRequest {
  name:     string
  email:    string
  password: string
}

