import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async (actiontext) => {
  const actionitems = await db.wS_OOO_ACTION_ITEMS.upsert({
    where: { ID:2 },
            create: {
              ACTION_TEXT: actiontext, STATUS: "INPROGRESS"
            },
            update: { ACTION_TEXT:actiontext },
  })

  return actionitems
})
