import { useQuery } from "blitz"
import getActionItems from "app/users/queries/getActionItems"
import { useState } from "react"

export const useActionItem = (managerid) => {
  const [intervalMs, setintervalMs] = useState(1)
  const [actionitems] = useQuery(getActionItems, managerid, { refetchInterval: intervalMs })
  return actionitems
}
