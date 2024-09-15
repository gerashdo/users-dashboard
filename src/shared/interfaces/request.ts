
export type ErrorResponseBody = {
  ok: boolean
  errors: Record<string, {msg: string}>
}
