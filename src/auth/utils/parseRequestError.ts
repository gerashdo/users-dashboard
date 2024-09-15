import { ErrorCode } from "../../shared/interfaces/request";


const codeMessages: Record<ErrorCode, string> = {
  400: 'Invalid request, please check your data',
  401: 'Invalid email or password',
  404: 'User not found',
  500: 'There was an error processing your request. Please try again later',
}

export const getLoginError = (errorCode: number | string): string => {
  return codeMessages[errorCode as ErrorCode] || 'An error occurred, please try again later';
}
