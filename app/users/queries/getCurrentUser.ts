import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUser(id, { session }: Ctx) {
  if (!id) id = session.userId

  const user = await db.user.findFirst({
    where: { id: id },
    select: { id: true, name: true, email: true, role: true },
  })

  return user
}
