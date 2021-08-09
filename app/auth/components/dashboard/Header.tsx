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
        <div className=" flex mx-4 text-blue-700 mt-2 ">
          <img
            src="/oneoneonemeeting.png"
            className="mr-2"
            style={{ width: "25px", height: "28px" }}
          />
          <h1 className="header-title">1:1 with John Doe</h1>
        </div>

        <button className="flex mr-1 p-0.5 w-40 rounded text-white text-base end_meeting_button	 ">
          <img src="/corner-up-right.png" className="my-2 ml-4" />
          <span className="ml-1 mt-1 mr-2">End Meeting</span>
        </button>
        <button className="flex mx-2 p-2 header_btns ">Previous 1 :1</button>
        <button className="flex mx-2 p-2 header_btns ">
          View 1 :1 <span className="from_header ml-1">from</span>
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
        <button className="actionitem_btn p-2 px-4 justify-end ml-20">
          <p>
            <span className="cardSpan">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2.08334C10.4398 2.08334 8.42587 2.69427 6.71286 3.83887C4.99984 4.98347 3.66471 6.61033 2.8763 8.51372C2.08789 10.4171 1.8816 12.5116 2.28353 14.5322C2.68546 16.5528 3.67755 18.4089 5.13435 19.8657C6.59115 21.3225 8.44722 22.3146 10.4679 22.7165C12.4885 23.1185 14.5829 22.9122 16.4863 22.1238C18.3897 21.3353 20.0166 20.0002 21.1612 18.2872C22.3058 16.5742 22.9167 14.5602 22.9167 12.5C22.9167 11.1321 22.6473 9.77753 22.1238 8.51372C21.6003 7.24992 20.833 6.10159 19.8657 5.13431C18.8985 4.16704 17.7501 3.39975 16.4863 2.87627C15.2225 2.35278 13.868 2.08334 12.5 2.08334ZM12.5 20.8333C10.8519 20.8333 9.2407 20.3446 7.87029 19.4289C6.49988 18.5132 5.43178 17.2118 4.80105 15.689C4.17032 14.1663 4.00529 12.4908 4.32683 10.8743C4.64838 9.25775 5.44205 7.77289 6.60749 6.60745C7.77293 5.44202 9.25778 4.64834 10.8743 4.3268C12.4908 4.00526 14.1664 4.17028 15.6891 4.80101C17.2118 5.43174 18.5133 6.49985 19.429 7.87026C20.3446 9.24067 20.8334 10.8518 20.8334 12.5C20.8334 14.7101 19.9554 16.8298 18.3926 18.3926C16.8298 19.9554 14.7102 20.8333 12.5 20.8333Z"
                    fill="#605BFF"
                  />
                  <path
                    d="M15.3125 8.73959L11.375 13.9479L9.67708 11.75C9.50717 11.5318 9.25753 11.3899 8.98306 11.3558C8.70859 11.3216 8.43179 11.3978 8.21354 11.5677C7.99528 11.7376 7.85347 11.9873 7.81928 12.2617C7.78509 12.5362 7.86134 12.813 8.03124 13.0313L10.5625 16.2708C10.6606 16.395 10.7857 16.4952 10.9283 16.5637C11.0709 16.6323 11.2272 16.6675 11.3854 16.6667C11.5445 16.6663 11.7014 16.6295 11.844 16.5591C11.9867 16.4886 12.1113 16.3865 12.2083 16.2604L16.9687 10.0104C17.1373 9.78941 17.2111 9.51051 17.174 9.23506C17.1369 8.95962 16.9918 8.7102 16.7708 8.54168C16.5498 8.37315 16.2709 8.29933 15.9955 8.33645C15.72 8.37356 15.4706 8.51858 15.3021 8.73959H15.3125Z"
                    fill="#605BFF"
                  />
                </svg>
              </span>
              <span className="text ml-2">Action Items</span>
            </span>
          </p>
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
