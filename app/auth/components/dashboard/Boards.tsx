import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import { CreateActionCard } from "app/auth/components/dashboard/CreateActionCard"
import React, { useState } from "react"
import { Link } from "@chakra-ui/react"
import { Draggable, Droppable } from "react-drag-and-drop"

type LayoutProps = {
  title?: string
  color?: string
}

export const Boards = ({ title, color }: LayoutProps) => {
  const goToPreviousPage = () => {
    return setActionCards([...actionCards, { component: <ActionCard /> }])
  }

  const [actionCards, setActionCards] = useState([{ component: <ActionCard /> }])
  return (
    <>
      {" "}
      <Droppable types={["insight"]} onDrop={(value) => ondrop?.bind(value)}>
        <ul>
          <div>
            <div className=" flex">
              <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex font-sans">
                <div className="rounded bg-gray-100 w-64">
                  <div
                    className={`${color}	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
                  >
                    {title}
                  </div>
                  {actionCards.map((val) => (
                    <>{val.component}</>
                  ))}
                  <div className="flex items-center justify-center shadow-2xl m-3">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-white shadow-2xl">
                      <Link onClick={goToPreviousPage}> +</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </Droppable>
    </>
  )
}

export default Boards
