import React, { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { v4 as uuid } from "uuid"
import ActionCard from "../ActionCard/ActionCard"

type LayoutProps = {
  actionItemsDetails?: actionItem[]
  title?: string
}

type actionItem = {
  ID: number
  AGENDA_DETAIL_ID?: number
  CREATED_BY?: number
  ACTION_TEXT?: string
  STATUS?: STATUS
  ASSIGNEE_ID?: number
  wS_OOO_AGENDA_DETAILSID?: number
}

enum STATUS {
  OPEN,
  INPROGRESS,
  CLOSED,
}

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    })
  }
}

const DragActionItems = ({ actionItemsDetails, title }: LayoutProps) => {
  const itemsFromBackend = actionItemsDetails?.map((actionItem) => ({
    id: uuid(),
    content: (
      <ActionCard
        actionText={actionItem.ACTION_TEXT}
        key={actionItem.ACTION_TEXT}
        id={actionItem.ID}
      />
    ),
  }))

  const columnsFromBackend = {
    [uuid()]: {
      items: itemsFromBackend,
    },
  }
  const [columns, setColumns] = useState(columnsFromBackend)
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {column.items?.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      color: "black",
                                      width: "275px",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default DragActionItems
