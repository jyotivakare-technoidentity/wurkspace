import { Ctx } from "blitz"
import db from "db"

export default async function getLabels(id, { session }: Ctx) {
  const user = await db.wS_LABELS.findMany({
    select: {
      LABEL_CODE: true,
    },
  })

  return user
}
