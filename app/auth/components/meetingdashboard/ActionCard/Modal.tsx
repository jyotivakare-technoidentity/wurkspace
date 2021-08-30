import React, { useState } from "react"
import { useSession } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import DatePicker from "react-datepicker"

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(true)
  const session = useSession()
  const userInfo = useCurrentUser(session.userId)
  let UserImage: string = userInfo?.image!
  let UserName: string = userInfo?.firstname!
  const [dueDate, setDuedate] = useState("")
  const [reminder, setReminder] = useState("")

  return (
    <>
      {showModal ? (
        <>
          <div className=" container rounded py-8  justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative rounded w-auto  my-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="flex justify-center content-center"></div>
                  <div className="flex">
                    <img
                      className="object-cover w-8 h-8 ml-8  mt-1 rounded-full"
                      src={UserImage}
                      alt="Profile image"
                    />
                    <p className="ml-3">
                      Assigned to <br />
                      <div className="text-blue-700	">{UserName}</div>
                    </p>
                  </div>
                </div>
                {/*body*/}
                <div className="bg-purple-600 bg-opacity-25 p-3 font-medium text-base  ">
                  <p>When are you most productive(Morning / Afternoon/ Evening)?</p>
                </div>
                <div className="flex grid gap-4 grid-cols-2">
                  <div className="col-start-1 col-end-4">
                    <h1 className="mt-2 ml-6 font-semibold">Add Notes</h1>
                    <div className="flex pl-4 mt-2">
                      <div className="">
                        <input className="w-96 h-40 border shadow-l"></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-end-7 ">
                    <div className="ml-2 p-1 pt-3 bg-gray-100 w-40">
                      <div className="flex  mt-4 justify-start">
                        <img src="/headercalender.png" className="h-4 w-4 mt-3 mx-4 " />
                        <span className="modal-content">
                          <h2>Due Date</h2>
                          <DatePicker
                            className={dueDate === "" ? "rounded w-20 " : "w-20 bg-gray-100 "}
                            selected={dueDate}
                            onChange={(date) => setDuedate(date)}
                          />{" "}
                        </span>
                      </div>
                      <div className="flex  mt-4 justify-start">
                        <img src="/headercalender.png" className="h-4 w-4 mt-3 mx-4" />
                        <span className="modal-content">
                          <h2>Reminder </h2>
                          <DatePicker
                            className={reminder === "" ? "rounded w-20 " : "w-20 bg-gray-100 "}
                            selected={reminder}
                            onChange={(date) => setReminder(date)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-black focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
