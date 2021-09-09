import { useQuery } from "blitz"
import getLabels from "app/users/queries/getLabels"
import { useState } from "react"

export const useLabels = () => {
  const [intervalMs, setintervalMs] = useState(1)
  const [labels] = useQuery(getLabels, { refetchInterval: intervalMs })
  return labels
}
