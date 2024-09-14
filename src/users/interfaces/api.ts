
export interface UpdateUserRequest {
  isActive:      boolean
}

export interface GetUsersResponse {
  _id:           string;
  name:          string;
  email:         string;
  isActive:      boolean;
  lastLoginTime: Date | null;
  createdAt:     Date;
  updatedAt:     Date;
}

