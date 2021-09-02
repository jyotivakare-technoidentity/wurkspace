import React from "react"
import { useState } from "react"
import { useSession } from "blitz"
import { useMutation } from "blitz"
import updatedisplayflag from "app/auth/mutations/updateDiscussionCard"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

type LayoutProps = {
  values?: WS_OOO_ACTION_ITEMS
}

type WS_OOO_ACTION_ITEMS = {
  ID: number
  AGENDA_DETAIL_ID?: number | null
  CREATED_BY?: number | null
  ACTION_TEXT?: string | undefined
  STATUS?: string | null
  ASSIGNEE_ID?: number | null
  wS_OOO_AGENDA_DETAILSID?: number | null
}

export const DiscussionCard = ({ values }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [discussionText, setDiscissionText] = useState(values.DISPLAY_FLAG)
  const [actiontext, setactiontext] = useState(values.DISCUSSION_POINT)
  const [updateDisplayMutation] = useMutation(updatedisplayflag)
  console.log(values)
  const session = useSession()
  const userInfo = useCurrentUser(session.userId)
  let UserImage: string = userInfo?.image!

  return (
    <div className="text-sm p-2">
      <div
        className="
p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
        style={{ background: "#E1E4F3" }}
      >
        <div className="flex justify-between">
          <input
            type="checkbox"
            className="m-1 h-7 w-7"
            onClick={() => {
              setDiscissionText(!discussionText)
              let id = values.ID
              let displayflag = !values.DISPLAY_FLAG
              updateDisplayMutation({ displayflag, id })
            }}
          ></input>
          <p className={discussionText ? "line-through" : "none"}>{actiontext}</p>
          <img src={UserImage} className="rounded-full h-8 w-8" />
        </div>
        <div className=" flex m-2 ">
          <img src="/calendar.png" className="mr-4" />
          Due on Aug 04, 2021
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
