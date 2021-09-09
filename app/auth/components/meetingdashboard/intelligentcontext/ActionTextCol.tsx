import React, { useEffect, useState } from "react"
import DiscussionCard from "../ActionCard/DiscussionCard"
import createActionCard from "app/auth/mutations/createActionCard"
import createDiscussionItems from "app/auth/mutations/createDiscussionCard"

import { useMutation, invalidateQuery } from "blitz"
import { useDrop } from "react-dnd"
import Card from "./Card"
import DragActionItems from "./DragActionItems"
import { InsightItems, InsightsItemType } from "./InsightsCard"
import updateInsightsItems from "app/auth/mutations/updateInsightsItems"
import getInsightsItems from "app/users/queries/getInsightsItems"
import getActionItems from "app/users/queries/getActionItems"

const ActionTextCol = ({ actionItem, index }) => {
  const [createDiscussionCardMutation] = useMutation(createDiscussionItems)

  const [createActionCardMutation] = useMutation(createActionCard, {
    onSuccess: async () => {
      await invalidateQuery(getActionItems)
    },
  })
  const [updateInsightsItemsMutation] = useMutation(updateInsightsItems, {
    onSuccess: async () => {
      await invalidateQuery(getInsightsItems)
    },
  })

  const [loader, setloader] = useState(false)
  const [input, setinput] = useState(false)
  const [test, settest] = useState(false)
  const [actiontext, setactiontext] = useState("Please add the text")

  useEffect(() => {
    setloader(false)
    settest(!test)
  }, [actionItem])

  //  drag card
  const [insightItem, setInsightItem] = useState<(InsightsItemType | undefined)[]>([])
  const onDrop = (item, index) => {
    // insightItem = InsightItems
    // console.log(InsightItems[item.id - 1])
    // setInsightItem((prevState) => [...prevState, InsightItems[item.id - 1]])
    const droppedItems = InsightItems.filter((i, idx) => i.ID === item.id)
    console.log(droppedItems)
    droppedItems[0]!.DISPLAY_FLAG = "N"

    updateInsightsItemsMutation({
      displayFlag: droppedItems[0]!.DISPLAY_FLAG,
      intelligentId: droppedItems[0]!.ID,
    })

    createActionCardMutation({
      actiontext: droppedItems[0]!.CONTEXT_POINT_TEXT,
      agendaDetailId: actionItem.ID,
    })

    setInsightItem(insightItem.filter((i, idx) => i!.ID !== item.id).concat(droppedItems[0]))

    console.log("Changed Flag Variable  :  ", droppedItems[0]!.DISPLAY_FLAG)
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "insight",
    drop: (item, monitor) => {
      onDrop(item, index)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div>
      <div className=" flex" ref={drop}>
        <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
          <div className="rounded bg-gray-100 w-72">
            <div
              className={`${actionItem.COLOR} board_text p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
            >
              {actionItem.WS_LABELS?.LABEL_TEXT}
            </div>
            <DragActionItems
              actionItemsDetailsList={actionItem.ACTION_ITEMS}
              agendaDetailid={actionItem.ID}
              test={test}
            />
            {actionItem.ACTION_ITEMS?.map((actionItem) =>
              actionItem.WS_OOO_DISCUSSION_CARD ? (
                <div key={actionItem.ID}>
                  {actionItem.WS_OOO_DISCUSSION_CARD?.map((disucssionCards) => (
                    <DiscussionCard values={disucssionCards} key={disucssionCards.ID} />
                  ))}
                </div>
              ) : (
                ""
              )
            )}
            {/* {insightItem
              // .filter((i) => i?.TAG_FOR_TOPIC === actionItem.WS_LABELS?.LABEL_TEXT)
              .map((item, idx) => {
                // console.log(item)
                return <Card key={idx} item={item} />
              })} */}
            <div className="flex items-center justify-center shadow-2xl m-3">
              <div className="rounded-full h-6 w-6 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a
                  onClick={() => {
                    const agendaDetailId = actionItem.ID
                    setloader(true)
                    createActionCardMutation({
                      actiontext,
                      agendaDetailId,
                    })
                  }}
                >
                  <img src="/plusicon.png" alt=""></img>
                </a>
              </div>
              {loader ? <>Loading...</> : ""}
              <div className="rounded-full h-6 w-6 ml-4 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a
                  onClick={() => {
                    const agendaDetailId = actionItem.ID
                    setloader(true)
                    createDiscussionCardMutation({
                      discussionPoint: actiontext,
                      agendaDetailId,
                      displayFlag: false,
                    })
                  }}
                >
                  <img src="/mask.png" alt=""></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionTextCol
