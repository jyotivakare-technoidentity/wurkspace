import { Ctx } from "blitz"
import db from "db"

export default async function getActionItems(_ = null, { session }: Ctx) {
  const actionItem = await db.wS_OOO_ACTION_ITEMS.findMany({
    select: { ID: true, ACTION_TEXT: true, STATUS: true, ASSIGNEE_ID: true },
  })

  return actionItem
}
