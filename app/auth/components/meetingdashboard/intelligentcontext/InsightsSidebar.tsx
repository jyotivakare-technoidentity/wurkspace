import {
  TiMessages,
  TiArrowForwardOutline,
  TiArrowShuffle,
  TiChartLineOutline,
} from "react-icons/ti"
import { IoIosArrowForward, IoIosArrowBack, IoIosCalendar, IoIosCog } from "react-icons/io"
import { GoalsCard } from "app/auth/components/meetingdashboard/intelligentcontext/GoalsCard"
import { AlertCard } from "app/auth/components/meetingdashboard/intelligentcontext/AlertCard"

import { InsightsCard } from "app/auth/components/meetingdashboard/intelligentcontext/InsightsCard"

import React from "react"

type LayoutProps = {
  sidebarOpen?: boolean
  setSidebarOpen(value: React.SetStateAction<boolean>): void
}

export const IntelligentContext = (props: LayoutProps) => {
  return (
    <div>
      <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
        {!props.sidebarOpen ? (
          <span>
            <IoIosArrowBack
              className="absolute top-1 right-0"
              style={{ height: "25px", width: "35px" }}
            />
          </span>
        ) : (
          <nav
            className={
              props.sidebarOpen
                ? "right-0 fixed top-0 "
                : "transition duration-500  transform translate-x-100 "
            }
          >
            <ul className="justify-center" onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
              <li>
                <div
                  className=" w-64 bg-fixed
                    min-h-full bg-white rounded-lg"
                >
                  <button
                    onClick={() => {
                      props.setSidebarOpen(!props.sidebarOpen)
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
                    <img src="/Mask.png" className="mr-2" />
                    <h1 style={{ fontSize: "15px" }}> MyGoals</h1>
                  </span>
                  <li>
                    <GoalsCard />
                  </li>
                  <span className="mx-4 flex left-0 relative text-blue-700">
                    <TiArrowShuffle className="mr-2" style={{ height: "20px", width: "20px" }} />
                    <h1 style={{ fontSize: "15px" }}> Insights</h1>
                  </span>
                  <li>
                    <InsightsCard />
                  </li>
                  <span className="mx-4 flex left-0 relative text-blue-700">
                    <TiChartLineOutline
                      className="mr-2"
                      style={{ height: "20px", width: "20px" }}
                    />
                    <h1 style={{ fontSize: "15px" }}> Alerts</h1>
                  </span>
                  <li>
                    <AlertCard />
                    <AlertCard />
                  </li>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </button>
    </div>
  )
}

export default IntelligentContext
