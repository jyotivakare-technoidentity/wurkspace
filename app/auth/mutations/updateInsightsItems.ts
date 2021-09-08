import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async ({ displayFlag, intelligentId }) => {
  const updateInsightsItems = await db.wS_OOO_INTELLIGENT_CONTEXT_POINTS.update({
    where: { ID: intelligentId },
    data: { DISPLAY_FLAG: displayFlag },
  })

  return updateInsightsItems
})
