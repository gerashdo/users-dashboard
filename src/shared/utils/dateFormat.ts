
export const formatDateTime = (isoDateTime: string) => {
  const date = new Date(isoDateTime)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return `${formattedDate} at ${formattedTime}`
}
