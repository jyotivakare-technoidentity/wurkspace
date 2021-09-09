import db from "db"
import { Ctx } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export default async function getUncheckedActionItems(managerid, { session }: Ctx) {
  let id = 0
  if (session.userId) id = session.userId
  if (!managerid) managerid = 0

  const actionItems = db.user.findFirst({
    where: { id: id, managerid: managerid },
    select: {
      WS_ONE_ON_ONES: {
        select: {
          ID: true,

          WS_OOO_BOARD_DETAILS: {
            select: {
              ACTION_ITEMS: {
                select: {
                  WS_OOO_DISCUSSION_CARD: {
                    where: { DISPLAY_FLAG: true },
                    select: {
                      ID: true,
                      DESCRIPTION: true,
                      DISPLAY_FLAG: true,
                      DISCUSSION_POINT: true,
                    },
                  },
                },
              },
              ID: true,
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

  return actionItems
}
