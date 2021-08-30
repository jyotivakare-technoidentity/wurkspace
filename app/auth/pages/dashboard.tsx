import { useRouter, BlitzPage, Routes, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Header } from "app/auth/components/meetingdashboard/Header"
import { SidebarWithHeader } from "../components/meetingdashboard/Sidebar"
import { useActionItem } from "app/core/hooks/useActionItem"
import React, { useEffect } from "react"
import createActionCard from "app/auth/mutations/createActionCard"
import { useState } from "react"
import { Suspense } from "react"
import DiscussionCard from "../components/meetingdashboard/ActionCard/DiscussionCard"
import DragActionItems from "../components/meetingdashboard/intelligentcontext/DragActionItems"

const ActionCardsValues = () => {
  const actionItems = useActionItem()
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState("Please add the text")
  const [loader, setloader] = useState(false)
  const [test, settest] = useState(false)
  useEffect(() => {
    settest(!test)
    setloader(false)
  }, [actionItems])
  return (
    <>
      {" "}
      <div className="flex">
        {actionItems &&
          actionItems?.map((actionItem) => (
            <div key={actionItem.ID}>
              <div className=" flex">
                <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
                  <div className="rounded bg-gray-100 w-72">
                    <div
                      className={`${actionItem.COLOR} board_text	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
                    >
                      {actionItem.CARD_TEXT}
                    </div>
                    <DragActionItems
                      actionItemsDetailsList={actionItem.ACTION_ITEMS}
                      test={test}
                      agendaDetailid={actionItem.ID}
                    />

                    {/* {dragActionItems.map(({ component: Component }) => (
                      <>
                        <Component actionItemsDetailsList={actionItems} />
                      </>
                    ))} */}
                    <DiscussionCard />
                    {loader && <>Loading...</>}
                    <div className="flex items-center justify-center shadow-2xl m-3">
                      <div className="rounded-full h-6 w-6 flex items-center justify-center flash_icons hover:cursor-pointer">
                        <a
                          onClick={() => {
                            const agendaDetailId = actionItem.ID
                            createActionCardMutation({ actiontext, agendaDetailId })
                            setloader(true)
                          }}
                        >
                          <img src="/plusicon.png"></img>
                        </a>
                      </div>
                      <div className="rounded-full h-6 w-6 ml-4 flex items-center justify-center flash_icons hover:cursor-pointer">
                        <a>
                          <img src="/mask.png"></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
