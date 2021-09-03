import db from "db"
import { Ctx } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export default async function getActionItems(managerid, { session }: Ctx) {
  let id = 0
  if (session.userId) id = session.userId
  if (!managerid) managerid = 0

  const actionItem = db.user.findFirst({
    where: { id: id, managerid: managerid },
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
                      DESCRIPTION: true,
                      DISPLAY_FLAG: true,
                      DISCUSSION_POINT: true,
                    },
                  },
                  ACTION_DESCRIPTION: true,
                  ACTION_TEXT: true,
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
