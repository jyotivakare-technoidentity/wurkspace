import React from "react"

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(true)
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="flex justify-center content-center		">
                    <button className="bg-gray-200 px-4 py-1 border border-gray-700 border-solid rounded-t text-gray-600">
                      <p>
                        Open <i className="arrow down ml-1 mb-0.5"></i>
                      </p>
                    </button>
                  </div>
                  <p className="ml-3">Assigned to</p>
                  <br />
                  <div className="text-blue-700	">Emma.</div>
                </div>
                {/*body*/}
                <div className="bg-purple-600 bg-opacity-25 p-3 font-medium font-sans ">
                  <p>When are you most productive(Morning / AFternoon/ Evening)?</p>
                </div>
                <h1 className="mt-2 ml-6">Add Notes</h1>
                <div className="flex pl-4 mt-2">
                  <div>
                    <input className="w-80 h-28 border shadow-l	"></input>
                    <div className="flex">
                      <img
                        className="object-cover w-6 h-6 m-4 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                      <span className="text-blue-700 mt-4 mr-2	">Emma</span>
                      <span className="text-black-100 mt-4 font-small">has created a task.</span>
                    </div>
                    <div className="flex">
                      <img
                        className="object-cover w-6 h-6 m-4 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                      <span className="text-blue-700 mt-4 mr-2	">Emma</span>
                      <span className="text-black-100 mt-4 font-small">has created a task.</span>
                    </div>
                    <div className="flex">
                      <img
                        className="object-cover w-6 h-6 m-4 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                      />
                      <span className="text-blue-700 mt-4 mr-2	">Emma</span>
                      <span className="text-black-100 mt-4 font-small">has created a task.</span>
                    </div>
                  </div>
                  <div className="ml-4 bg-gray-100 w-25 h-60 pr-0 mr-1">
                    <h2 className="mt-4 modal-content">Start Date</h2>
                    <p className="modal-content">Not Yet Set</p>
                    <h1 className="mt-4 modal-content">Due Date</h1>
                    <p className="modal-content">Not Yet Set</p>
                    <h1 className="mt-4 modal-content">Reminder</h1>
                    <p className=" modal-content">Not Yet Set</p>
                    <h1 className="mt-4 modal-content">Priority</h1>
                    <p className=" modal-content">Not Yet Set</p>
                  </div>
                </div>
                {/*footer*/}
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
