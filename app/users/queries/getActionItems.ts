import db from "db"
import { Ctx } from "blitz"

export default async function getActionItems(_ = null, { session }: Ctx) {
  const actionItem = db.wS_OOO_BOARD_DETAILS.findMany({
    select: {
      ACTION_ITEMS: {
        select: {
          WS_OOO_DISCUSSION_CARD: {
            select: {
              ID: true,
              AGENDA_DETAIL_ID: true,
              DESCRIPTION: true,
              DISPLAY_FLAG: true,
              DISCUSSION_POINT: true,
            },
          },
          ACTION_DESCRIPTION: true,
          ACTION_TEXT: true,
          DISCUSSION_CARD_ID: true,
        },
      },
      ID: true,
      OOO_ID: true,
      COLOR: true,
      WS_LABELS: {
        select: {
          LABEL_TEXT: true,
        },
      },
    },
  })

  return actionItem
}
