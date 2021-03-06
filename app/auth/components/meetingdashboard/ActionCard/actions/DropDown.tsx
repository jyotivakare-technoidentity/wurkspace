import React, { ReactChild } from "react"
import { BiPencil, BiCheck } from "react-icons/bi"
import { useState } from "react"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import EditActionCard from "./EditActionCard"
import DeleteActionCard from "./DeleteActionCard"
import CopyActionCard from "./CopyActionCard"

type LayoutProps = {
  actionText?: string
  inEditMode?: boolean
  setinEditMode?(value: React.SetStateAction<boolean>): void
  id: number | undefined
  agendaDetailid?: number | undefined
}

export const Dropdown = (props: LayoutProps) => {
  return (
    <div className="text-grey-darker mt-2 flex mr-1">
      <div id="wrapper">
        <ul id="menu">
          <li>
            <a>
              <img src="threedots.png" className="float-right	ml-0" />
            </a>
            <ul id="tab1" className="w-max m-2">
              <li>
                <EditActionCard
                  actionText={props.actionText}
                  setinEditMode={props.setinEditMode}
                  inEditMode={props.inEditMode}
                  actionCardId={props.id}
                />
              </li>
              <li>
                <DeleteActionCard id={props.id} />
              </li>
              <li>
                <CopyActionCard
                  actionText={props.actionText}
                  agendaDetailId={props.agendaDetailid}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
