import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import { useState } from "react"
import { IoIosArrowForward, IoIosArrowBack, IoIosCalendar, IoIosCog } from "react-icons/io"
import GoalsCard from "app/auth/components/dashboard/GoalsCard"
import InsightsCard from "app/auth/components/dashboard/InsightsCard"
import AlertCard from "app/auth/components/dashboard/AlertCard"
import { SidebarWithHeader } from "app/auth/components/dashboard/Sidebar"

import {
  TiMessages,
  TiArrowForwardOutline,
  TiArrowShuffle,
  TiChartLineOutline,
} from "react-icons/ti"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <>
      <div className="flex  mt-4 ml-12 ">
        <div className=" flex mx-4 text-blue-700 ">
          <TiMessages className="mr-2" style={{ width: "25px", height: "28px" }} />
          <h1 className="font-bold text-lg">1:1 with John Doe</h1>
        </div>

        <button className="flex ml-6 mr-1 p-2 bg-yellow-500 hover:bg-yellow-600 rounded ">
          <TiArrowForwardOutline className="my-1" />
          End Meeting
        </button>
        <button className="flex mx-2 p-2 bg-gray-100 hover:bg-gray-200 rounded ">
          Previous 1 :1
        </button>
        <button className="flex mx-2 p-2 bg-gray-100 hover:bg-gray-200 rounded ">
          View 1 :1 from
          <DatePicker
            className="rounded w-24 px-1 mx-1"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <IoIosCalendar className="mr-2 mt-1" />/ to{" "}
          <DatePicker
            className="rounded w-24 px-1 mx-1"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <IoIosCalendar className=" mt-1" />
        </button>
        <button onClick={() => showSidebar()}>
          {!sidebarOpen ? (
            <span>
              <IoIosArrowBack
                className="absolute top-1 right-0"
                style={{ height: "25px", width: "35px" }}
              />
            </span>
          ) : (
            <nav
              className={
                sidebarOpen
                  ? "right-0 fixed top-0 "
                  : "transition duration-500  transform translate-x-100 "
              }
            >
              <ul className="justify-center" onClick={() => showSidebar}>
                <li>
                  <div
                    className=" w-64 bg-fixed
                    min-h-full bg-gray-200 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        showSidebar()
                      }}
                      className="flex left-0 relative"
                    >
                      {
                        <IoIosArrowForward
                          style={{ height: "25px", width: "30px" }}
                          className="m-2"
                        />
                      }
                    </button>

                    <span className="mx-4 flex left-0 relative text-blue-700">
                      <IoIosCog className="mr-2" style={{ height: "20px", width: "20px" }} />
                      <h1 style={{ fontSize: "15px" }}> MyGoals</h1>
                    </span>
                    <ul>
                      <li>
                        <GoalsCard />
                      </li>
                    </ul>
                    <span className="mx-4 flex left-0 relative text-blue-700">
                      <TiArrowShuffle className="mr-2" style={{ height: "20px", width: "20px" }} />
                      <h1 style={{ fontSize: "15px" }}> Insights</h1>
                    </span>
                    <ul>
                      <li>
                        <InsightsCard />
                      </li>
                    </ul>
                    <span className="mx-4 flex left-0 relative text-blue-700">
                      <TiChartLineOutline
                        className="mr-2"
                        style={{ height: "20px", width: "20px" }}
                      />
                      <h1 style={{ fontSize: "15px" }}> Alerts</h1>
                    </span>
                    <ul>
                      <li>
                        <AlertCard />
                        <AlertCard />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </button>
      </div>
    </>
  )
}

export default Header
