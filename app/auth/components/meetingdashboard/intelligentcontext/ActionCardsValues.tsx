import { useMutation } from "blitz"
// import Layout from "app/core/layouts/Layout"

import { useActionItem } from "app/core/hooks/useActionItem"
import React, { useCallback, useEffect } from "react"
import createActionCard from "app/auth/mutations/createActionCard"
import { useState } from "react"
// import { Suspense } from "react";
// import DiscussionCard from "app/auth/components/meetingdashboard/ActionCard/DiscussionCard"
// import DragActionItems from "./DragActionItems"

import { useDrop } from "react-dnd"

import { InsightItems } from "./InsightsCard"
import Card from "./Card"
import DragActionItems from "./DragActionItems"
import ActionTextCol from "./ActionTextCol"
import Layout from "app/core/layouts/Layout"
import DiscussionCard from "../ActionCard/DiscussionCard"
interface InsightItemsType {
  id: number
  text: string
  btn_text: string
}
const ActionCardsValues = () => {
  const actionItems = useActionItem(session.managerid)
  console.log(actionItems)
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState("Please add the text")
  const [loader, setloader] = useState(false)
  const [test, settest] = useState(false)

  const [insightItem, setInsightItem] = useState<(InsightItemsType | undefined)[]>([]) // Drop card
  const onDrop = (item, index) => {
    // console.log("item  : " + item.id + " index of the card :" + index)
    // console.log("btn_text   :" + InsightItems[item.id - 1]?.btn_text)

    // setInsightItem(update(insightItem, { $push: [InsightItems[item.id - 1]] }))
    setInsightItem((prevItems) => [...prevItems, InsightItems[item.id - 1]])
  }
  //console.log("insight items :", insightItem)

  return (
    <>
      {" "}
      <div className="flex">
        {actionItems?.WS_ONE_ON_ONES?.map((WS_OOO_BOARD_DETAILS, idx) =>
          WS_OOO_BOARD_DETAILS.WS_OOO_BOARD_DETAILS?.map((actionItem, idx) => (
            <div key={actionItem.ID}>
              <ActionTextCol
                actionItem={actionItem}
                onDrop={onDrop}
                index={idx}
                insightItem={insightItem}
                cardText={actionItem.WS_LABELS?.LABEL_TEXT}
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
