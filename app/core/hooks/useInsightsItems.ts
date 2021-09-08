import { useQuery } from "blitz"
import getInsightsItems from "app/users/queries/getInsightsItems"
import { useState } from "react"

export const useInsightsItem = () => {
  // const [intervalMs, setIntervalMs] = useState(1)

  const [insightsItems] = useQuery(
    getInsightsItems,
    null
    //   {
    //   refetchInterval: intervalMs,
    // }
  )
  return insightsItems
}
