import React from "react"
import { Modal } from "app/auth/components/dashboard/Modal"
import { BiPencil, BiCheck } from "react-icons/bi"
import { useState } from "react"

export const ActionCard = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [inEditMode, setInEditMode] = useState(false)
  return (
    <div className="text-sm p-2 ml-2">
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        {inEditMode ? (
          <input
            type="text"
            defaultValue="Check the responsive layout on all devices"
            className="border rounded w-full py-2 px-3 text-left overflow-visible"
          />
        ) : (
          <a onClick={() => setShowModal(true)}>Check the responsive layout on all devices</a>
        )}
        {showModal ? <Modal /> : ""}
        <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
          <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full " />
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
