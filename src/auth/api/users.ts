import axios from "axios"
import { getEnvVariables } from "../../shared/utils/envVariables"
import { UserLoginResponse } from "../interfaces/api"
import { CreateUserRequest } from "../interfaces/api"

const BASE_URL = getEnvVariables().VITE_API_URL

export const getUsers = async () => {
  const url = `${BASE_URL}/users`
  return axios.get<UserLoginResponse[]>(url)
}

export const createUser = async (data: CreateUserRequest) => {
  const url = `${BASE_URL}/users`
  return axios.post<UserLoginResponse>(url, data)
}
