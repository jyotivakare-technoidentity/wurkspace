import React, { ReactChild } from "react"
import { BiPencil, BiCheck } from "react-icons/bi"
import { useState } from "react"
import actionCard from "app/auth/mutations/actionCard"
import { useMutation } from "blitz"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  actionCardId?: number | undefined
  setinEditMode?(value: React.SetStateAction<boolean>): void
}

export const EditActionCard = ({ actionText, inEditMode, actionCardId, setinEditMode }) => {
  const [actionCardMutation] = useMutation(actionCard)

  return (
    <div>
      {!inEditMode ? (
        <BiPencil
          size={20}
          className="m-2 text-gray-400 hover:text-gray-600 justify-end"
          onClick={() => {
            setinEditMode && setinEditMode(!inEditMode)
          }}
        />
      ) : (
        <BiCheck
          size={20}
          className="m-2 text-xl text-blue-400 hover:text-blue-600 justify-end"
          onClick={() => {
            actionCardMutation({ actionText, actionCardId })
            setinEditMode && setinEditMode(!inEditMode)
          }}
        />
      )}
    </div>
  )
}

export default EditActionCard
