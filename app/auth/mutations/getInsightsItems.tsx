import db from "db"
import { Ctx } from "blitz"

export default async function getInsightsItems(_ = null, { session }: Ctx) {
  const insightsItem = db.wS_OOO_INTELLIGENT_CONTEXT_POINTS.findMany({
    select: {
      ID: true,
      CONTEXT_SECTION: true,
      DISPLAY_FLAG: true,
      CONTEXT_POINT_TEXT: true,
      TAG_FOR_TOPIC: true,
      EMPLOYEE_ID: true,
      SOURCE_APPLICATION: true,
    },
  })

  return insightsItem
}
