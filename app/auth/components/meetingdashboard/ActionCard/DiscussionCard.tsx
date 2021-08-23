import React from "react"
import { useState } from "react"
import { useSession } from "blitz"

export const DiscussionCard = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [discussionText, setDiscissionText] = useState(false)
  const [actiontext, setactiontext] = useState(
    "When are you most productive? (Morning / Afternoon / Evening)"
  )
  const session = useSession()

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
            className="m-2 h-7 w-7"
            onClick={() => {
              setDiscissionText(!discussionText)
            }}
          ></input>
          <p className={discussionText ? "line-through" : "none"}>{actiontext}</p>
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
