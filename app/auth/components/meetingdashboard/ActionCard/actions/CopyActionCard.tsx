import React, { ReactChild } from "react"
import { BiCopyAlt, BiCheck } from "react-icons/bi"
import { useState } from "react"
import { useMutation } from "blitz"
import createActionCard from "app/auth/mutations/createActionCard"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  setinEditMode?(value: React.SetStateAction<boolean>): void
  agendaDetailId: number | undefined
}

export const CopyActionCard = (props: LayoutProps) => {
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState(props.actionText)
  const [agendaDetailId, setagendaDetailId] = useState(1)

  return (
    <div>
      <BiCopyAlt
        size={20}
        className="m-2 text-gray-400 hover:text-gray-600 justify-end"
        onClick={() => {
          createActionCardMutation({ actiontext, agendaDetailId })
        }}
      ></BiCopyAlt>
    </div>
  )
}

export default CopyActionCard
