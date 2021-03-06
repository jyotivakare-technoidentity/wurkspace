import React from "react"
import { Modal } from "app/auth/components/meetingdashboard/ActionCard/Modal"
import { useState } from "react"
import { Suspense } from "react"
import Dropdown from "./actions/DropDown"
import { useSession } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import DropDownItemsList from "./actions/DropDownItemsList"

type LayoutProps = {
  actionText?: string
  id?: number
  agendaDetailid?: number
  discussionCard?: any
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

export const ActionCard = ({ actionText, id, agendaDetailid, discussionCard }: LayoutProps) => {
  const [showModal, setShowModal] = React.useState(false)
  const [showDropDown, setshowDropDown] = useState(false)
  const [actiontext, setactiontext] = useState(actionText)
  const [inEditMode, setinEditMode] = useState(false)
  const session = useSession()
  const userInfo = useCurrentUser(session.userId)
  let UserImage: string = userInfo?.image!

  return (
    <div className="text-sm p-1">
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
            <img src={UserImage} alt="image" className=" rounded-full h-8 w-8 	 " />
          </div>
        ) : (
          <div className="flex justify-between">
            <a
              onClick={() => setShowModal(true)}
              className="truncate hover:overflow-visible hover:whitespace-normal"
            >
              {actiontext}
            </a>
            <img src={UserImage} className="rounded-full h-8 w-8" />
          </div>
        )}
        {showModal ? <Modal /> : ""}
        <div className="text-grey-darker mt-2 flex justify-between ">
          <DropDownItemsList />
          <Dropdown
            inEditMode={inEditMode}
            setinEditMode={setinEditMode}
            id={id}
            actionText={actiontext}
            agendaDetailid={agendaDetailid}
          />
        </div>
      </div>
    </div>
  )
}

export default ActionCard
