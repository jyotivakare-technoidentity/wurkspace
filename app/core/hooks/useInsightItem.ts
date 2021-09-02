import { useQuery } from "blitz"
import getInsightItems from "app/users/queries/getInsightItems"
import { useState } from "react"

export const useInsightItem = () => {
  // const [intervalMs, setIntervalMs] = useState(1)

  const [insightItems] = useQuery(
    getInsightItems,
    null
    //   {
    //   refetchInterval: intervalMs,
    // }
  )
  return insightItems
}
