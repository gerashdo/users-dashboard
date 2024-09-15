import axios from "axios"
import { getEnvVariables } from "../../shared/utils/envVariables"
import { CreateUserResponse } from "../interfaces/api"
import { CreateUserRequest } from "../interfaces/api"
import { GetUsersResponse } from "../../users/interfaces/api"

const BASE_URL = getEnvVariables().VITE_API_URL

export const getUsers = async () => {
  const url = `${BASE_URL}/users`
  return axios.get<GetUsersResponse[]>(url)
}

export const createUser = async (data: CreateUserRequest) => {
  const url = `${BASE_URL}/users`
  return axios.post<CreateUserResponse>(url, data)
}
