const toLocalISODate = (value: Date | string) => {
  const date = value instanceof Date ? value : new Date(value)
  const [month, day, year] = date.toLocaleDateString().split('/')

  const adaptedMonth = month.padStart(2, '0')
  const adaptedDay = day.padStart(2, '0')

  return `${year}-${adaptedMonth}-${adaptedDay}`
}

export { toLocalISODate }
