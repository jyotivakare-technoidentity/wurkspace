import React from "react"
import { Modal } from "app/auth/components/dashboard/Modal"

export const ActionCard = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div className="text-sm p-2 ml-2">
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <a onClick={() => setShowModal(true)}>Check the responsive layout on all devices</a>
        {showModal ? <Modal /> : ""}
        <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
          <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full " />
        </div>
      </div>
    </div>
  )
}

export default ActionCard
