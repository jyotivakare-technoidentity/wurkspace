import React, { ReactChild } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import deleteActionCard from "app/auth/mutations/deleteActionCard"
import { useMutation } from "blitz"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  setinEditMode?(value: React.SetStateAction<boolean>): void
  id: number
}

export const DeleteActionCard = (props: LayoutProps) => {
  const [deleteActionCardMutation] = useMutation(deleteActionCard)

  return (
    <div>
      <AiOutlineDelete
        size={20}
        className="m-2 text-gray-400 hover:text-gray-600 justify-end"
        onClick={() => {
          deleteActionCardMutation(props.id)
        }}
      />
    </div>
  )
}

export default DeleteActionCard
