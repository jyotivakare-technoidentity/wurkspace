import React from "react"
import { Modal } from "app/auth/components/meetingdashboard/ActionCard/Modal"
import { useState } from "react"
import { Suspense } from "react"
import actionCard from "app/auth/mutations/actionCard"
import { useMutation } from "blitz"
import Dropdown from "./actions/DropDown"
import { useSession } from "blitz"

type LayoutProps = {
  actionText?: string
  id: number
}

export const ActionInfo = ({ actionText, id }: LayoutProps) => {
  return (
    <>
      {" "}
      <div>
        <Suspense fallback="Loading.....">
          <ActionInfo actionText={actionText} id={id} />
        </Suspense>
      </div>{" "}
    </>
  )
}

export const ActionCard = ({ actionText, id }: LayoutProps) => {
  const [showModal, setShowModal] = React.useState(false)
  const [actiontext, setactiontext] = useState(actionText)
  const [actionCardMutation] = useMutation(actionCard)
  const [dropDown, setdropDown] = useState(false)
  const [inEditMode, setinEditMode] = useState(false)
  const session = useSession()

  return (
    <div className="text-sm p-2">
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        {inEditMode ? (
          <div className="flex justify-between">
            <input
              type="text"
              defaultValue={actionText}
              className="border rounded py-2 px-3 text-left overflow-visible max-w-xs"
              onChange={(event) => {
                setactiontext(event.target.value)
              }}
            />
            <img src="/user_default.png" className=" rounded-full h-8 w-8 	 " />
          </div>
        ) : (
          <div className="flex justify-between">
            <a
              onClick={() => setShowModal(true)}
              className="truncate hover:overflow-visible hover:whitespace-normal"
            >
              {actiontext}
            </a>
            <img src={session.image} className="rounded-full h-8 w-8" />
          </div>
        )}
        {showModal ? <Modal /> : ""}
        <div className="text-grey-darker mt-2 ml-2 flex">
          <span className="placeholder opacity-0 hover:opacity-100">
            Type / to open the items list
          </span>
          <Dropdown
            inEditMode={inEditMode}
            setinEditMode={setinEditMode}
            id={id}
            actionText={actiontext}
          />
        </div>
      </div>
    </div>
  )
}

export default ActionCard
