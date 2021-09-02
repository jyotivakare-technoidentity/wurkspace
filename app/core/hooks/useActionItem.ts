import { useQuery } from "blitz"
import getActionItems from "app/users/queries/getActionItems"
import { useState } from "react"

export const useActionItem = () => {
  const [intervalMs, setintervalMs] = useState(1)
  const [actionitems] = useQuery(getActionItems, null, { refetchInterval: intervalMs })
  return actionitems
}
