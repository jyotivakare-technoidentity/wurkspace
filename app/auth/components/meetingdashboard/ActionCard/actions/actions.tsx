import React from "react"

export const MutationsActionCard = ({ actionText, inEditMode }) => {
  return (
    <div className="text-grey-darker mt-2 ml-2 flex items-center">
      <span className="placeholder opacity-0 hover:opacity-100">Type / to open the items list</span>
      <img src="/threedots.png"></img>
    </div>
  )
}

export default MutationsActionCard
