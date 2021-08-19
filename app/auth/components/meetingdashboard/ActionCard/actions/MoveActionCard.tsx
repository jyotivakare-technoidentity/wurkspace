import React, { ReactChild } from "react"
import { BiCopyAlt, BiCheck, BiRightArrowAlt } from "react-icons/bi"
import { useState } from "react"
import actionCard from "app/auth/mutations/actionCard"
import { useMutation } from "blitz"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import createActionCard from "app/auth/mutations/createActionCard"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  setinEditMode?(value: React.SetStateAction<boolean>): void
  agendaDetailId: number
}

export const MoveActionCard = (props: LayoutProps) => {
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState(props.actionText)
  const [agendaDetailId, setagendaDetailId] = useState(1)

  return (
    <div>
      <BiRightArrowAlt
        size={25}
        className="m-2 text-gray-400 hover:text-gray-600 justify-end"
        onClick={() => {
          createActionCardMutation({ actiontext, agendaDetailId })
        }}
      ></BiRightArrowAlt>
    </div>
  )
}

export default MoveActionCard
