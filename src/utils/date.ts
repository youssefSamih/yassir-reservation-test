// ####################################################################################################
// ~~~~~~ Get date time
// ####################################################################################################

export const getTime = (date: string) => {
  return new Date(date).getTime()
}

// ####################################################################################################
// ~~~~~~ Format invalid date
// ####################################################################################################

export const formatDate = (date: string) => {
  const formatedDate = date.split('.')

  // // swap since date in the date base are (month, day,year) and Date method accepts (day, month, year)

  ;[formatedDate[2], formatedDate[1], formatedDate[0]] = [
    formatedDate[0],
    // eslint-disable-next-line no-self-assign
    formatedDate[1],
    formatedDate[2],
  ]

  return formatedDate.join('-')
}
