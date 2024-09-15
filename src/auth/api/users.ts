import axios from "axios"
import { getEnvVariables } from "../../shared/utils/envVariables"
import { CreateUserResponse, GetUserResponse } from "../interfaces/api"
import { CreateUserRequest } from "../interfaces/api"

const BASE_URL = getEnvVariables().VITE_API_URL

export const createUser = async (data: CreateUserRequest) => {
  const url = `${BASE_URL}/users`
  return axios.post<CreateUserResponse>(url, data)
}

export const getUserById = async (id: string) => {
  const url = `${BASE_URL}/users/${id}`
  return axios.get<GetUserResponse>(url)
}
