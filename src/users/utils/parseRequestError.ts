import { ErrorCode, SuccessCode } from "../../shared/interfaces/request";


const DeleteUserCodeMessages: Partial<Record<ErrorCode | SuccessCode, string>> = {
  404: 'User not found',
  204: 'User deleted successfully',
  500: 'There was an error processing your request. Please try again later',
}

const UpdateUserCodeMessages: Partial<Record<ErrorCode | SuccessCode, string>> = {
  400: 'Invalid request, please check your data',
  404: 'User not found',
  200: 'User updated successfully',
  500: 'There was an error processing your request. Please try again later',
}

export const getDeleteUserMessage = (errorCode: number | string): string => {
  return DeleteUserCodeMessages[errorCode as ErrorCode | SuccessCode] || 'An error occurred, please try again later';
}

export const getUpdateUserMessage = (errorCode: number | string): string => {
  return UpdateUserCodeMessages[errorCode as ErrorCode | SuccessCode] || 'An error occurred, please try again later';
}
