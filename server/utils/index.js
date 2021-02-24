exports.dateFormat = (date, format = 'yyyy-mm-dd hh:MM:ss') => {
  const year = date.getFullYear().toString()
  const month = date.getMonth().toString().padStart(2, '0')
  const days = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  const regs = {
    'y+': year,
    'm+': month,
    'd+': days,
    'h+': hours,
    'M+': minutes,
    's+': seconds
  }
  for (const k in regs) {
    format = format.replace(new RegExp(k), regs[k])
  }
  return format
}
