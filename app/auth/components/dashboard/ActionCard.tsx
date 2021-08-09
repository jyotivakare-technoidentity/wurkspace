import React from "react"
import { Modal } from "app/auth/components/dashboard/Modal"
import { BiPencil, BiCheck } from "react-icons/bi"
import { useState } from "react"
import { useActionItem } from "app/core/hooks/useActionItem"
import { Suspense } from "react"

const ActionInfo = () => {
  const actionItem = useActionItem()

  return (
    <>
      {" "}
      <div>{actionItem}</div>{" "}
    </>
  )
}

export const ActionCard = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [inEditMode, setInEditMode] = useState(false)
  const action = "Check the responsive layout on all devices"

  return (
    <div className="text-sm p-2">
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <Suspense fallback="Loading...">
          <ActionInfo />
        </Suspense>

        {inEditMode ? (
          <div className="flex">
            <input
              type="text"
              defaultValue="Check the responsive layout on all devices"
              className="border rounded py-2 px-3 text-left overflow-visible max-w-xs"
            />
            <img src="user_default.png" className=" rounded-full h-8 w-8 	 " />
          </div>
        ) : (
          <div className="flex">
            <a onClick={() => setShowModal(true)}>{action}</a>
            <img src="user_default.png" className="rounded-full h-8 w-8	 " />
          </div>
        )}
        {showModal ? <Modal /> : ""}
        <div className="text-grey-darker mt-2 ml-2 flex justify-end items-end">
          {!inEditMode ? (
            <BiPencil
              className="m-2 text-gray-400 hover:text-gray-600"
              onClick={() => {
                setInEditMode(true)
              }}
            />
          ) : (
            <BiCheck
              className="m-2 text-xl text-blue-400 hover:text-blue-600"
              onClick={() => {
                setInEditMode(false)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ActionCard
