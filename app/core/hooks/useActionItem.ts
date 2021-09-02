import { useQuery } from "blitz"
import getActionItems from "app/users/queries/getActionItems"
import { useState } from "react"

export const useActionItem = () => {
  const [actionitems] = useQuery(getActionItems, null, {})
  return actionitems
}
