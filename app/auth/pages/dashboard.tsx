import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { ActionCard } from "app/auth/components/ActionCard"

const DashBoard: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <ActionCard />
    </div>
  )
}

DashBoard.redirectAuthenticatedTo = "/"
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
