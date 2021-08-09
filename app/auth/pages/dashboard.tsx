import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Boards } from "app/auth/components/dashboard/Boards"
import { Header } from "app/auth/components/dashboard/Header"
import { SidebarWithHeader } from "../components/dashboard/Sidebar"

const DashBoard: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="h-screen">
      <Header />
      <div className="flex ml-12">
        <SidebarWithHeader />
        <Boards title="Whats on top of your mind" color="purple" />
        <Boards title="Things that well this week" color="blue" />
        <Boards title="Learnings" color="pink" />
        <Boards title="Priorities since we last met" color="blue-light" />
        <Boards title="Challenges" color="yellow" />
        <Boards title="Feedback" color="bg-purple-400" />
      </div>
    </div>
  )
}

DashBoard.redirectAuthenticatedTo = "/"
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
