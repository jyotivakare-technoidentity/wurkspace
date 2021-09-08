import React, { useEffect, useState } from "react"
import DiscussionCard from "../ActionCard/DiscussionCard"
import createActionCard from "app/auth/mutations/createActionCard"
import createDiscussionItems from "app/auth/mutations/createDiscussionCard"

import { useMutation } from "blitz"
import { useDrop } from "react-dnd"
import Card from "./Card"
import DragActionItems from "./DragActionItems"

const ActionTextCol = ({ actionItem, onDrop, index, insightItem, cardText }) => {
  const [createActionCardMutation] = useMutation(createActionCard)
  const [createDiscussionCardMutation] = useMutation(createDiscussionItems)

  const [loader, setloader] = useState(false)
  const [input, setinput] = useState(false)
  const [test, settest] = useState(false)
  const [actiontext, setactiontext] = useState("Please add the text")

  // console.log("Action text col :", insightItem)

  useEffect(() => {
    setloader(false)
    settest(!test)
  }, [actionItem])

  //  drag card

  // const [insightItem, setInsightItem] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "insight",
    drop: (item, monitor) => {
      onDrop(item, index)
      // console.log(item.id)
      // console.log("card text  :", cardText)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),

    // hover
  }))

  return (
    <div>
      <div className=" flex" ref={drop}>
        <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
          <div className="rounded bg-gray-100 w-72">
            <div
              className={`${actionItem.COLOR}  board_text p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
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
            {insightItem
              .filter((i) => i.btn_text === actionItem.WS_LABELS?.LABEL_TEXT)
              .map((item, idx) => {
                return <Card key={idx} item={item} />
              })}
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
