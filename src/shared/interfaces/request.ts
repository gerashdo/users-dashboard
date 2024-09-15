export type ErrorCode = 400 | 401 | 404 | 500

export type SuccessCode = 200 | 201 | 204

export type ErrorResponseBody = {
  ok: boolean
  errors: Record<string, {msg: string}>
}
