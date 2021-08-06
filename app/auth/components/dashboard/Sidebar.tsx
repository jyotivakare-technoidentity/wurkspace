import { AllActionSideBar } from "app/auth/components/dashboard/AllActionSidebar"
import { Link } from "blitz"
import React from "react"
import { useState } from "react"

export const SidebarWithHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)
  return (
    <div className="w-10 bg-blue-700 mr-11 fixed top-0 left-0">
      <div className="w-10 bg-blue-700 fixed min-h-screen">
        {!sidebarOpen ? (
          <a onClick={() => showSidebar()} className="m-4 pt-1">
            <img src="/action.png" className="p-2 mt-10" alt="remote work" />
          </a>
        ) : (
          <div>
            <a onClick={() => showSidebar()} className="m-4 pt-1">
              <img src="/action.png" className="p-2 mt-10" alt="remote work" />
            </a>
            <AllActionSideBar />
          </div>
        )}
        <img src="/notification.ico" className="p-2" alt="remote work" />
        <img src="/users.png" className="p-2" alt="remote work" />
        <img src="/action.png" className="p-2" alt="remote work" />
        <img src="/message.png" className="p-2" alt="remote work" />
        <img
          className="object-cover w-8 h-8 rounded-full absolute bottom-6"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
    </div>
  )
}
export default SidebarWithHeader
