import db from "db"

export default async function getUser({ id }) {
  const user = db.user.findFirst({
    where: { id: id },
    select: {
      name: true,
      email: true,
      role: true,
    },
  })

  return user
}
