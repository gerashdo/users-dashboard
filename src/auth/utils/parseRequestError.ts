import { ErrorCode } from "../../shared/interfaces/request";


const LoginCodeMessages: Partial<Record<ErrorCode, string>> = {
  400: 'Invalid request, please check your data',
  401: 'Invalid email or password',
  404: 'User not found',
  500: 'There was an error processing your request. Please try again later',
}

const SignUpCodeMessages: Partial<Record<ErrorCode, string>> = {
  400: 'Invalid request, please check your data',
  409: 'Email already in use',
  500: 'There was an error processing your request. Please try again later',
}

export const getLoginError = (errorCode: number | string): string => {
  return LoginCodeMessages[errorCode as ErrorCode] || 'An error occurred, please try again later';
}

export const getSignUpError = (errorCode: number | string): string => {
  return SignUpCodeMessages[errorCode as ErrorCode] || 'An error occurred, please try again later';
}
