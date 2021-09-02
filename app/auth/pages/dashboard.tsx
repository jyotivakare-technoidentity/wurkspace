import { useRouter, BlitzPage, Routes, useMutation } from "blitz"
import React, { Suspense } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import Layout from "app/core/layouts/Layout"
import { Header } from "app/auth/components/meetingdashboard/Header"
import { SidebarWithHeader } from "app/auth/components/meetingdashboard/Sidebar"
import ActionCardsValues from "../components/meetingdashboard/intelligentcontext/ActionCardsValues"

const DashBoard: BlitzPage = () => {
  // const router = useRouter()
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="h-screen">
          <Header />
          <div className="flex ml-12">
            <SidebarWithHeader />
            <Suspense fallback="Loading...">
              <ActionCardsValues />
            </Suspense>
          </div>
        </div>
      </DndProvider>
    </>
  )
}

DashBoard.authenticate = { redirectTo: "/" }
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
