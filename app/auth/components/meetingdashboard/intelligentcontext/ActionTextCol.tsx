import React, { useEffect, useState } from "react"
import DiscussionCard from "../ActionCard/DiscussionCard"
import createActionCard from "app/auth/mutations/createActionCard"
import { useMutation } from "blitz"
import { useDrop } from "react-dnd"
import Card from "./Card"

const ActionTextCol = ({ actionItem, onDrop, index, insightItem, cardText }) => {
  const [createActionCardMutation] = useMutation(createActionCard)
  const [loader, setloader] = useState(false)
  const [actiontext, setactiontext] = useState("Please add the text")

  // useEffect(() => {
  //   settest(!test)
  //   setloader(false)
  // }, [actionItems])

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
              className={`${actionItem.COLOR} board_text	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
            >
              {actionItem.CARD_TEXT}
            </div>
            {/* <DragActionItems
                    actionItemsDetailsList={actionItem.ACTION_ITEMS}
                    test={test}
                    agendaDetailid={actionItem.ID}
                  /> */}

            {/* {insightItem.map((item, idx) => {
              return (
                <Card key={idx} text={item.text} btn_text={item.btn_text} id={item.id} idx={idx} />
              )
            })} */}
            {cardText === actionItem.CARD_TEXT && <Card item={insightItem} />}
            <DiscussionCard />
            {loader && <>Loading...</>}
            <div className="flex items-center justify-center shadow-2xl m-3">
              <div className="rounded-full h-6 w-6 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a
                  onClick={() => {
                    const agendaDetailId = actionItem.ID
                    createActionCardMutation({
                      actiontext,
                      agendaDetailId,
                    })
                    setloader(true)
                  }}
                >
                  <img src="/plusicon.png"></img>
                </a>
              </div>
              <div className="rounded-full h-6 w-6 ml-4 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a>
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
