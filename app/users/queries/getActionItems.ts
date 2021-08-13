import db from "db"
import { Ctx } from "blitz"

export default async function getActionItems(_ = null, { session }: Ctx) {
  const actionItem = db.wS_OOO_AGENDA_DETAILS.findMany({
    select: {
      ACTION_ITEMS: true,
      ID: true,
      OOO_ID: true,
      TOPIC_TYPE: true,
      CARD_TEXT: true,
      OICP_ID: true,
      COLOR: true,
    },
  })

  return actionItem
}
