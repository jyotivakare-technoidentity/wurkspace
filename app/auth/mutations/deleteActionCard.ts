import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async (id: number) => {
  let temp: number = 0
  if (id) temp = id
  await db.wS_OOO_ACTION_ITEMS.delete({ where: { ID: temp } })
})
