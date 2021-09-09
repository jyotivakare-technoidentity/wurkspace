import { useQuery } from "blitz"
import getUncheckedActionItems from "app/users/queries/getUncheckedActionItems"
import { useState } from "react"

export const useUncheckedActionItems = (managerid) => {
  const [intervalMs, setintervalMs] = useState(1)
  const [actionitems] = useQuery(getUncheckedActionItems, managerid, {
    refetchInterval: intervalMs,
  })
  return actionitems
}
