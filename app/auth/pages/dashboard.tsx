import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Boards } from "app/auth/components/dashboard/Boards"
import { Header } from "app/auth/components/dashboard/Header"

const DashBoard: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Header />
      <div className="flex">
        <Boards title="Whats on top of your mind" color="bg-purple-200" />
        <Boards title="Things that well this week" color="bg-pink-200" />
        <Boards title="Learnings" color="bg-green-200" />
        <Boards title="Priorities since we last met" color="bg-yellow-400" />
        <Boards title="Challenges" color="bg-blue-200" />
        <Boards title="Feedback" color="bg-purple-400" />
      </div>
    </div>
  )
}

DashBoard.redirectAuthenticatedTo = "/"
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
