
export const isUserInDeletionList = (userIds: string[], userId: string) => {
  return userIds.includes(userId)
}
