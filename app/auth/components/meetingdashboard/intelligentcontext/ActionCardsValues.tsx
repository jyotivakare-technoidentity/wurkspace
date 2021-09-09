import { useMutation } from "blitz"
// import Layout from "app/core/layouts/Layout"

import { useActionItem } from "app/core/hooks/useActionItem"
import React, { useCallback, useEffect } from "react"
import createActionCard from "app/auth/mutations/createActionCard"
// import updateInsightsItems from "app/auth/mutations/updateInsightsItems"
import { useState } from "react"
// import { Suspense } from "react";
// import DiscussionCard from "app/auth/components/meetingdashboard/ActionCard/DiscussionCard"
// import DragActionItems from "./DragActionItems"

import { useDrop } from "react-dnd"

import { InsightItems, InsightsItemType } from "./InsightsCard"
import Card from "./Card"
import DragActionItems from "./DragActionItems"
import ActionTextCol from "./ActionTextCol"
import Layout from "app/core/layouts/Layout"
import DiscussionCard from "../ActionCard/DiscussionCard"
import { useSession } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

// interface InsightItemsType {
//   id: number
//   text: string
//   btn_text: string
// }
const ActionCardsValues = () => {
  const session = useSession()
  const userInfo = useCurrentUser(session.userId)
  const actionItems = useActionItem(userInfo?.managerid)

  // console.log(actionItems)
  const [createActionCardMutation] = useMutation(createActionCard)
  // const [updateInsightsItemsMutation] = useMutation(updateInsightsItems)
  const [actiontext, setactiontext] = useState("Please add the text")
  const [loader, setloader] = useState(false)
  const [test, settest] = useState(false)

  // const [insightItem, setInsightItem] = useState<(InsightsItemType | undefined)[]>([])

  // Drop card
  // const onDrop = (item, index) => {
  //   // console.log("item  : " + item.id + " index of the card :" + index)
  //   // console.log("btn_text   :" + InsightItems[item.id - 1]?.btn_text)

  //   // setInsightItem(update(insightItem, { $push: [InsightItems[item.id - 1]] }))
  //   setInsightItem((prevItems) => [...prevItems, InsightItems[item.id - 1]])
  // }
  //console.log("insight items :", insightItem)

  // const onDrop = (item, index) => {
  //   // insightItem = InsightItems
  //   // console.log(InsightItems[item.id - 1])
  //   // setInsightItem((prevState) => [...prevState, InsightItems[item.id - 1]])
  //   const droppedItems = InsightItems.filter((i, idx) => i.ID === item.id)
  //   droppedItems[0]!.DISPLAY_FLAG = "N"
  //   let displayFlag = droppedItems[0]!.DISPLAY_FLAG
  //   let intelligentId = droppedItems[0]!.ID
  //   updateInsightsItemsMutation({ displayFlag, intelligentId })
  //   // console.log("dropped itemmm.......", droppedItems[0]!.ID)
  //   // updateInsightsItemsMutation(
  //   //   (displayFlag ),
  //   //   (intelligentId
  //   // )
  //   // setInsightItem(insightItem.filter((i, idx) => i.ID !== item.id).concat(droppedItems[0]))

  //   console.log("Changed item.......", droppedItems[0]!.DISPLAY_FLAG)
  // }
  // console.log("insight items :", insightItem)

  return (
    <>
      {" "}
      <div className="flex">
        {actionItems?.WS_ONE_ON_ONES?.map((WS_OOO_BOARD_DETAILS, idx) =>
          WS_OOO_BOARD_DETAILS.WS_OOO_BOARD_DETAILS?.map((actionItem, idx) => (
            <div key={actionItem.ID}>
              <ActionTextCol
                actionItem={actionItem}
                // onDrop={onDrop}
                index={idx}
                // insightItem={insightItem}
              />
            </div>
          ))
        )}
      </div>{" "}
    </>
  )
}

ActionCardsValues.authenticate = { redirectTo: "/" }
ActionCardsValues.getLayout = (page) => <Layout title="ActionCardsValues">{page}</Layout>

export default ActionCardsValues
