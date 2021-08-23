import { useQuery } from "blitz"
import getCurrentUser from "app/users/queries/getCurrentUser"

export const useUser = (id) => {
  const [user] = useQuery(getCurrentUser, id)
  return user
}
