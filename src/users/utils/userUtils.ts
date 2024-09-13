
export const isUserInDeletionList = (userIds: number[], userId: number) => {
  return userIds.includes(userId)
}
