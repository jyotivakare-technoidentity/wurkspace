import { useQuery } from "blitz"
import getInsightItems from "app/users/queries/getInsightsItems"
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
