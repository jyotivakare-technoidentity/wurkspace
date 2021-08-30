import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async ({ actiontext, agendaDetailId }) => {
  const createActionItems = await db.wS_OOO_ACTION_ITEMS.create({
    data: {
      ACTION_TEXT: actiontext,
      AGENDA_DETAIL_ID: agendaDetailId,
      STATUS: "INPROGRESS",
      wS_OOO_AGENDA_DETAILSID: agendaDetailId,
    },
  })

  return createActionItems
})
