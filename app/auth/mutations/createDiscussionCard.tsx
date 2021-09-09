import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(
  async ({ discussionPoint, agendaDetailId, displayFlag, actionItemId }) => {
    const createDiscussionItems = await db.wS_OOO_DISCUSSION_CARD.create({
      data: {
        DISCUSSION_POINT: discussionPoint,
        DISPLAY_FLAG: displayFlag,
        DESCRIPTION: "testing",
        wS_OOO_ACTION_ITEMSID: 4,
      },
      select: { ID: true, DISCUSSION_POINT: true, DISPLAY_FLAG: true, DESCRIPTION: true },
    })

    return createDiscussionItems
  }
)
