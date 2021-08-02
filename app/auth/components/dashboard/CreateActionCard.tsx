import { Link } from "@chakra-ui/react"
import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import React from "react"
import { render } from "test/utils"

type LayoutProps = {
  actioncards?: string
  setActionCards?: string
}

export const CreateActionCard = (actionCards, setActionCards) => {
  const goToPreviousPage = () => {
    return setActionCards([...actionCards, { component: <ActionCard /> }])
  }

  return (
    <div className="flex items-center justify-center shadow-2xl m-3">
      <div className="rounded-full h-6 w-6 flex items-center justify-center bg-white shadow-2xl">
        <Link onClick={goToPreviousPage}> +</Link>
      </div>
    </div>
  )
}

export default CreateActionCard
