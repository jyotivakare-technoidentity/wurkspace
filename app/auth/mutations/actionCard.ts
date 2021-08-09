import { resolver } from "blitz"
import db from "db"
import { ActionCard } from "../validations"
import { Role } from "types"

export default resolver.pipe(resolver.zod(ActionCard), async ({}, ctx) => {
  return await db.wS_OOO_ACTION_ITEMS.create({ ACTION_TEXT: ActionCard.text })
})
