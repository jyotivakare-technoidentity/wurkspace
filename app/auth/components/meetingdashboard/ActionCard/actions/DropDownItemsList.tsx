import { Menu, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

export default function DropDownItemsList() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      {({ open = false }) => (
        <>
          <Menu.Button>
            {" "}
            <input
              type="text"
              placeholder="Type / to open the items list"
              onKeyPress={(event) => {
                console.log(event.code)
                if (event.code === "Slash") open = true
              }}
            ></input>
          </Menu.Button>
          {open && (
            <div className="w-64 text-right fixed top-46 ">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute right-0	 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
                  static
                >
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-violet-500 text-gray-700" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                          ) : (
                            <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                          )}
                          Add a discussion point
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-violet-500 text-gray-700" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <ArchiveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                          ) : (
                            <ArchiveInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                          )}
                          Add a action point
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          )}
        </>
      )}
    </Menu>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#A78BFA"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#A78BFA"
        fill="#8B5CF6"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}
