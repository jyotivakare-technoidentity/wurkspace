import { ActionCard } from "app/auth/components/meetingdashboard/ActionCard"
import { CreateActionCard } from "app/auth/components/meetingdashboard/CreateActionCard"
import React, { Suspense, useState } from "react"
import { Link } from "@chakra-ui/react"
import { useActionItem } from "app/core/hooks/useActionItem"

type LayoutProps = {
  title?: string
  color?: string
}

export const Boards = ({ title, color }: LayoutProps) => {
  const actionItem = useActionItem()
  const ActionCardsValues = () => {
    return (
      <>
        {" "}
        <div>
          {actionItem.map((val) => (
            <ActionCard key={val.ID} actionText={val.ACTION_TEXT} />
          ))}
        </div>{" "}
      </>
    )
  }

  return (
    <div>
      <div className=" flex">
        <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
          <div className="rounded bg-gray-100 w-64">
            <div
              className={`${color} board_text	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
            >
              {title}
            </div>
            <Suspense fallback="Loading...">
              <ActionCardsValues />
            </Suspense>
            <div className="flex items-center justify-center shadow-2xl m-3">
              <div className="rounded-full h-8 w-8 flex items-center justify-center flash_icons">
                +
              </div>
              <div className="rounded-full h-8 w-8 ml-8 flex items-center justify-center flash_icons">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.15328 9.59986H9.00003C9.21303 9.59986 9.41628 9.69061 9.55803 9.84886C9.69978 10.0071 9.76803 10.2186 9.74553 10.4301L9.40878 13.5426L12.8468 8.39986H9.00003C8.78703 8.39986 8.58378 8.30911 8.44203 8.15086C8.29953 7.99261 8.23128 7.78111 8.25453 7.56961L8.59128 4.45786L5.15328 9.59986ZM8.33328 17.2499C8.24778 17.2499 8.16153 17.2356 8.07678 17.2049C7.75278 17.0864 7.55028 16.7624 7.58778 16.4196L8.16453 11.0999H3.75003C3.47328 11.0999 3.21903 10.9476 3.08853 10.7039C2.95803 10.4594 2.97303 10.1631 3.12678 9.93286L9.04353 1.08361C9.23478 0.795614 9.59778 0.677114 9.92253 0.795614C10.2473 0.913364 10.4498 1.23811 10.4123 1.58086L9.83553 6.89986H14.25C14.5268 6.89986 14.781 7.05286 14.9115 7.29661C15.042 7.54111 15.027 7.83661 14.8733 8.06686L8.95653 16.9169C8.81478 17.1299 8.57778 17.2499 8.33328 17.2499Z"
                    fill="#231F20"
                  />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="0"
                    width="12"
                    height="18"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.15328 9.59986H9.00003C9.21303 9.59986 9.41628 9.69061 9.55803 9.84886C9.69978 10.0071 9.76803 10.2186 9.74553 10.4301L9.40878 13.5426L12.8468 8.39986H9.00003C8.78703 8.39986 8.58378 8.30911 8.44203 8.15086C8.29953 7.99261 8.23128 7.78111 8.25453 7.56961L8.59128 4.45786L5.15328 9.59986ZM8.33328 17.2499C8.24778 17.2499 8.16153 17.2356 8.07678 17.2049C7.75278 17.0864 7.55028 16.7624 7.58778 16.4196L8.16453 11.0999H3.75003C3.47328 11.0999 3.21903 10.9476 3.08853 10.7039C2.95803 10.4594 2.97303 10.1631 3.12678 9.93286L9.04353 1.08361C9.23478 0.795614 9.59778 0.677114 9.92253 0.795614C10.2473 0.913364 10.4498 1.23811 10.4123 1.58086L9.83553 6.89986H14.25C14.5268 6.89986 14.781 7.05286 14.9115 7.29661C15.042 7.54111 15.027 7.83661 14.8733 8.06686L8.95653 16.9169C8.81478 17.1299 8.57778 17.2499 8.33328 17.2499Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect width="18" height="18" fill="#0D1C2E" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boards