import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Boards } from "app/auth/components/dashboard/Boards"
import { Header } from "app/auth/components/dashboard/Header"

const DashBoard: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Header />
      <Boards />
    </div>
  )
}

DashBoard.redirectAuthenticatedTo = "/"
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
