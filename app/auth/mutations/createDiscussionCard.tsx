import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async ({ discussionPoint, agendaDetailId, displayFlag }) => {
  const createDiscussionItems = await db.wS_OOO_DISCUSSION_CARD.create({
    data: {
      DISCUSSION_POINT: discussionPoint,
      AGENDA_DETAIL_ID: agendaDetailId,
      DISPLAY_FLAG: displayFlag,
    },
  })

  return createDiscussionItems
})
