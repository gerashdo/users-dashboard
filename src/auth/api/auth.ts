import axios from "axios"
import { getEnvVariables } from "../../shared/utils/envVariables"
import { UserLoginRequest, UserLoginResponse } from "../interfaces/api"


const BASE_URL = getEnvVariables().VITE_API_URL

export const loginUser = async (data: UserLoginRequest) => {
  const url = `${BASE_URL}/auth`
  return axios.post<UserLoginResponse>(url, data)
}
