import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Boards } from "app/auth/components/meetingdashboard/Boards"
import { Header } from "app/auth/components/meetingdashboard/Header"
import { SidebarWithHeader } from "../components/meetingdashboard/Sidebar"
import { useActionItem } from "app/core/hooks/useActionItem"
import React, { Component, Suspense, useEffect, useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const ActionCardsValues = () => {
  const [test, settest] = useState(false)
  const actionItemList = useActionItem()

  const [actionRender, setactionRender] = useState(false)
  const [actionItems, setActionItems] = useState<any>()

  useEffect(() => {
    setActionItems(actionItemList)
  }, [actionRender, actionItemList])

  return (
    <>
      {" "}
      <div className="flex">
        {actionItems &&
          actionItems?.map((actionItem) => (
            <Boards
              title={actionItem.CARD_TEXT}
              color={actionItem.COLOR}
              key={actionItem.ID}
              agendaDetailId={actionItem.ID}
              actionItemsDetails={actionItem.ACTION_ITEMS}
              setactionRender={setactionRender}
              actionRender={actionRender}
            />
          ))}
      </div>{" "}
    </>
  )
}

const DashBoard: BlitzPage = () => {
  const router = useRouter()
  return (
    <div className="h-screen">
      <Header />
      <div className="flex ml-12">
        <SidebarWithHeader />
        <Suspense fallback="Loading...">
          <ActionCardsValues />
        </Suspense>
      </div>
    </div>
  )
}

DashBoard.authenticate = { redirectTo: "/" }
DashBoard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>

export default DashBoard
