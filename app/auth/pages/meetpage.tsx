import { useRouter, BlitzPage, Routes, useSession } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Boards } from "app/auth/components/meetingdashboard/Boards"
import { Header } from "app/auth/components/meetingdashboard/Header"
import { SidebarWithHeader } from "../components/meetingdashboard/Sidebar"
import { useActionItem } from "app/core/hooks/useActionItem"
import React, { Component, Suspense, useEffect, useState } from "react"

import GoalsCard from "../components/meetingdashboard/intelligentcontext/GoalsCard"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const UserInfo = () => {
  const session = useSession()
  const userInfo = useCurrentUser(session.userId)

  // Greet your Visitors with Good Morning, Good Afternoon or Good Evening Message

  let hour = new Date().getHours()
  const [greet, setGreet] = useState(
    "Good " + ((hour < 12 && "Morning") || (hour < 18 && "Afternoon") || "Evening")
  )

  return (
    <>
      <div className=" flex mx-4 mt-6 ml-7 ">
        <div className=" ">
          <img
            src="/user_icon_on_meet_page.png"
            className="mr-2"
            alt="userIcon"
            style={{ width: "94.91px", height: "114.9px" }}
          />
        </div>
        <div>
          <h1
            className="header-title mt-1 text-blue-700 "
            style={{
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "32.74px",
            }}
          >
            {greet} {userInfo?.name}
          </h1>
          <p
            className=" mt-1 ml-1 p_tag"
            style={{
              width: "721px",
              height: "70px",
              left: "214px",
              top: "77px",
              fontStyle: "normal",

              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Set the foundation for Success.</span> Wurkspace is
            where teams gather to have productive and meaningful 1:1s, build collaborative meeting
            agendas, come up with action items and keep each other accountable and motivated.
          </p>
        </div>
      </div>
    </>
  )
}

const MeetPage: BlitzPage = () => {
  const router = useRouter()
  return (
    <>
      <div className=" bg-gray-100 h-screen">
        <div>
          {/* <Header /> */}
          <div className="flex ml-12">
            <SidebarWithHeader />
            <Suspense fallback="Loading...">
              <UserInfo />
            </Suspense>
            {/* <GoalsCard /> */}
            <Suspense fallback="Loading...">{/* <ActionCardsValues /> */}</Suspense>
          </div>
        </div>
        <div>
          <img
            style={{
              position: "absolute",
              width: "487px",
              height: "442px",
              left: "70%",
              top: "60%",
            }}
            src="/meetImage.png"
            alt="meetIcon"
          />
        </div>

        {/* upcoming meet card */}

        <div className=" mt-10 py-1 ml-20">
          <div className="bg-white max-w-md shadow-xl rounded-md p-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold leading-5 text-gray-800 pr-40">
                Your upcoming 1:1
              </p>
            </div>
            {/* card-1 */}
            <div className="mt-6 p-2 rounded w-full flex justify-between">
              <div
                className="py-1 bg-gray-100 hover:shadow shadow rounded-md mr-3"
                style={{
                  fontFamily: "Nunito",
                  width: "118px",
                  height: "129px",
                  left: "122px",
                  top: "272px",
                }}
              >
                <img className="py-1 px-11  " src="/chatIcon.png" alt="meetIcon" />

                <div className="text-base text-center font-semibold py-1  text-blue-700 ">
                  John Doe
                </div>
                <div className="px-4 text-sm text-center text-black-700">21-07-2021, 4:30 PM</div>
              </div>
              {/* card-2 */}
              <div
                className="py-1 bg-gray-100 hover:shadow shadow rounded-md mr-3 "
                style={{
                  fontFamily: "Nunito",
                  width: "118px",
                  height: "129px",
                  left: "122px",
                  top: "272px",
                }}
              >
                <img className="py-1 px-11  " src="/chatIcon.png" alt="meetIcon" />

                <div className="text-base text-center font-semibold py-1 text-blue-700 ">David</div>
                <div className="px-4 text-sm text-center text-black-700">25-07-2021, 4:30 PM</div>
              </div>
              {/* card-3 */}
              <div
                className="py-1 bg-gray-100 hover:shadow shadow rounded-md "
                style={{
                  fontFamily: "Nunito",
                  width: "118px",
                  height: "129px",
                  left: "122px",
                  top: "272px",
                }}
              >
                <img className="py-1 px-11  " src="/chatIcon.png" alt="meetIcon" />

                <div className="text-base text-center font-semibold py-1 text-blue-700 ">
                  John Doe
                </div>
                <div className="px-4 text-sm text-center text-black-700">31-07-2021, 4:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Item Card */}

        <div className="py-1 ml-20 ">
          <div className="max-w-md max-h-64 shadow-2xl rounded-md bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold leading-5 text-gray-800 pr-40">Action Items</p>
            </div>

            <div className="mt-3 ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checked:bg-blue-600 checked:border-transparent ml-2 w-4"
                />

                <p className="text-sm ml-3 mr-3">Completing the course on Kubernetes.</p>
              </div>
              <p className=" px-9 text-xs h-3 text-gray-400 tracking-wide">Due on Aug 04, 2021</p>
            </div>
            <div className="mt-3 ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checked:bg-blue-600 checked:border-transparent ml-2 w-4"
                />

                <p className="text-sm ml-3 mr-3">Closing on pending issues before next week.</p>
              </div>
              <p className=" px-9 text-xs h-3 text-gray-400 tracking-wide">Due on Aug 04, 2021</p>
            </div>
            <div className="mt-3 ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checked:bg-blue-600 checked:border-transparent ml-2 w-4"
                />

                <p className="text-sm ml-3 mr-3">Collect the details of the upcoming project.</p>
              </div>
              <p className=" px-9 text-xs h-3 text-gray-400 tracking-wide">Due on Aug 04, 2021</p>
            </div>
          </div>
        </div>

        {/* Your Manager Card */}
        <div className="py-1 ml-20">
          <div className="max-w-md max-h-64 shadow-2xl rounded-md bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold leading-5 text-gray-800 pr-40">Your Manager</p>
            </div>

            <div className="flex items-start justify-between mt-6 w-full">
              <div className="flex items-center">
                <div className="flex w-8 h-8 bg-gray-100 rounded">
                  <img
                    src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png"
                    alt="profile"
                    className="w-full h-full rounded-3xl"
                  />
                  {/* <div className="">
                    <p className="text-sm font-semibold  text-gray-800 pr-40">Your Manager</p>
                  </div> */}
                </div>
                <div className="pl-3">
                  <p className="text-sm font-medium leading-normal text-gray-800">Sandra Rogers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MeetPage.authenticate = { redirectTo: "/" }
MeetPage.getLayout = (page) => <Layout title="MeetPage">{page}</Layout>

export default MeetPage
