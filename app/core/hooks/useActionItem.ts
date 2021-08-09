import { useQuery } from "blitz"
import getActionItems from "app/users/queries/getActionItems"

export const useActionItem = () => {
  const [actionitems] = useQuery(getActionItems, null)
  return actionitems
}
