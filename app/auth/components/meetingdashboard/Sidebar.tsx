import { AllActionSideBar } from "app/auth/components/meetingdashboard/AllActionSidebar"
import { Link } from "blitz"
import React from "react"
import { useState } from "react"

export const SidebarWithHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)
  return (
    <div className="w-10 bg-blue-700 mr-11 fixed top-0 left-0">
      <div className="w-10 bg-blue-700 fixed min-h-screen">
        <img src="/logo_company.png" className="p-2 mt-1" alt="logo" />
        <img src="/bell.png" className="p-2 mt-1" alt="notification" />
        <img src="/users.png" className="p-2 mt-1" alt="users" />
        <img
          className="object-cover w-8 h-8 mt-8 rounded-full absolute bottom-6"
          src="/user_footer.png"
          alt="Profile image"
        />
      </div>
    </div>
  )
}
export default SidebarWithHeader
