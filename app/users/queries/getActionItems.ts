import db from "db"
import { Ctx } from "blitz"

export default async function getActionItems(_ = null, { session }: Ctx) {
  const actionItem = db.wS_OOO_BOARD_DETAILS.findMany({
    select: {
      ACTION_ITEMS: true,
      ID: true,
      OOO_ID: true,
      COLOR: true,
    },
  })

  return actionItem
}
