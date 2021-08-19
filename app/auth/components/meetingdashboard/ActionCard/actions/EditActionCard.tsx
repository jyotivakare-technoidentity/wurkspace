import React, { ReactChild } from "react"
import { BiPencil, BiCheck } from "react-icons/bi"
import { useState } from "react"
import actionCard from "app/auth/mutations/actionCard"
import { useMutation } from "blitz"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  setinEditMode?(value: React.SetStateAction<boolean>): void
}

export const EditActionCard = (props: LayoutProps) => {
  const [actionCardMutation] = useMutation(actionCard)
  console.log(props)

  return (
    <div>
      {!props.inEditMode ? (
        <BiPencil
          size={20}
          className="m-2 text-gray-400 hover:text-gray-600 justify-end"
          onClick={() => {
            props.setinEditMode && props.setinEditMode(!props.inEditMode)
          }}
        />
      ) : (
        <BiCheck
          size={20}
          className="m-2 text-xl text-blue-400 hover:text-blue-600 justify-end"
          onClick={() => {
            actionCardMutation(props.actionText)
            props.setinEditMode && props.setinEditMode(!props.inEditMode)
          }}
        />
      )}
    </div>
  )
}

export default EditActionCard
