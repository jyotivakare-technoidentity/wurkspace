import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async (actiontext) => {
  const createActionItems = await db.wS_OOO_ACTION_ITEMS.create({
    data: {
      ACTION_TEXT: actiontext,
      STATUS: "INPROGRESS",
    },
  })

  return createActionItems
})
