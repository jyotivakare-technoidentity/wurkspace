import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async ({ displayflag, id }) => {
  const updatedisplayflag = await db.wS_OOO_DISCUSSION_CARD.update({
    where: { ID: id },
    data: { DISPLAY_FLAG: displayflag },
  })

  return updatedisplayflag
})
