import { ActionCard } from "app/auth/components/meetingdashboard/ActionCard/ActionCard"
import React, { Suspense, useEffect, useState } from "react"
import { useMutation, useRouter } from "blitz"
import createActionCard from "app/auth/mutations/createActionCard"
import DragActionItems from "app/auth/components/meetingdashboard/intelligentcontext/DragActionItems"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { DiscussionCard } from "./ActionCard/DiscussionCard"

type LayoutProps = {
  title?: string
  color?: string
  agendaDetailId: number
  actionItemsDetails?: actionItem[]
  setactionRender(value: React.SetStateAction<boolean>): void
  actionRender?: boolean
}

type actionItem = {
  ID: number
  AGENDA_DETAIL_ID?: number
  CREATED_BY?: number
  ACTION_TEXT?: string
  STATUS?: STATUS
  ASSIGNEE_ID?: number
  wS_OOO_AGENDA_DETAILSID?: number
}

enum STATUS {
  OPEN,
  INPROGRESS,
  CLOSED,
}

export const Boards = ({
  title,
  color,
  actionItemsDetails,
  agendaDetailId,
  actionRender,
  setactionRender,
}: LayoutProps) => {
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState("Please add the text")
  const router = useRouter()

  return (
    <div>
      <div className=" flex">
        <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
          <div className="rounded bg-gray-100 w-72">
            <div
              className={`${color} board_text	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
            >
              {title}
            </div>

            <DragActionItems actionItemsDetails={actionItemsDetails} title={title} />
            <DiscussionCard />

            <div className="flex items-center justify-center shadow-2xl m-3">
              <div className="rounded-full h-6 w-6 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a
                  onClick={(eent) => {
                    createActionCardMutation({ actiontext, agendaDetailId })
                    setactionRender(!actionRender)
                  }}
                >
                  <img src="/plusicon.png"></img>
                </a>
              </div>
              <div className="rounded-full h-6 w-6 ml-4 flex items-center justify-center flash_icons hover:cursor-pointer">
                <a>
                  <img src="/mask.png"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boards
