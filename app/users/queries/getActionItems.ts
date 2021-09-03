import db from "db"
import { Ctx } from "blitz"

export default async function getActionItems(_ = null, { session }: Ctx) {
  let id = 0
  if (session.userId) id = session.userId

  const actionItem = db.user.findFirst({
    where: { id: id, managerid: session.managerid },
    select: {
      firstname: true,
      managerid: true,
      WS_ONE_ON_ONES: {
        select: {
          ID: true,
          EMPLOYEE_ID: true,
          OOO_WITH_EMPLOYEE_ID: true,
          START_TIME: true,
          END_TIME: true,
          WS_OOO_BOARD_DETAILS: {
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
          },
        },
      },
    },
  })

  return actionItem
}
