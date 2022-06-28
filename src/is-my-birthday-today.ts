interface Birthday {
  day: number
  month: number
}

const MyBirthday: Birthday = { day: 25, month: 8 }

export default function isMyBirthdayToday(birthday: Birthday = MyBirthday): boolean {
  const today = new Date()

  const isSameDay = birthday.day === today.getDate()

  const isSameMonth = birthday.month === today.getMonth() + 1

  return (isSameDay && isSameMonth)
}
