import axios from "axios"
import { getEnvVariables } from "../../shared/utils/envVariables"
import { GetUsersResponse, UpdateUserRequest,  } from "../interfaces/api"


const BASE_URL = getEnvVariables().VITE_API_URL

export const getUsers = async () => {
  const url = `${BASE_URL}/users`
  return axios.get<GetUsersResponse[]>(url)
}

type UpdateUserProps = {
  id: string
  data: UpdateUserRequest
}

export const updateUser = async({ id, data}: UpdateUserProps) => {
  const url = `${BASE_URL}/users/${id}`
  return axios.put<GetUsersResponse>(url, data)
}

export const deleteUser = async(id: string) => {
  const url = `${BASE_URL}/users/${id}`
  return axios.delete(url)
}
