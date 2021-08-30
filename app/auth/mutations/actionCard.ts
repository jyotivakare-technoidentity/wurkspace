import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async ({ actiontext, actionCardId }) => {
  const actionitems = await db.wS_OOO_ACTION_ITEMS.upsert({
    where: { ID: actionCardId },
    create: {
      ACTION_TEXT: actiontext,
      STATUS: "INPROGRESS",
    },
    update: { ACTION_TEXT: actiontext },
  })

  return actionitems
})
