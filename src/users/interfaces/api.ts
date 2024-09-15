
export interface UpdateUserRequest {
  isActive:      boolean
}

export interface UpdateUserResponse {
  _id:           string
  name:          string
  email:         string
  isActive:      boolean
  lastLoginTime?: string
  createdAt:     string
  updatedAt:     string
}

export interface GetUsersResponse {
  _id:           string
  name:          string
  email:         string
  isActive:      boolean
  lastLoginTime?: string
  createdAt:     string
  updatedAt:     string
}

