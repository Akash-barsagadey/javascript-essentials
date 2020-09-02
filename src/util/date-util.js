export const getDateTimeByTimeZone = (TIME_ZONE) => {
  let dateString = new Date().toLocaleString('en-US', { timeZone: TIME_ZONE })
  return dateString
}
