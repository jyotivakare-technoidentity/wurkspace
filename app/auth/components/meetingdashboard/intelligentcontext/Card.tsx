import React from "react"
import { useDrag } from "react-dnd"

const Card = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "insight",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div>
      <div className="m-2" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className="insights_sidebar p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className="text-black mb-1 text-xs text-left">{item.text}</p>
          <button className="m-1 px-1 rounded-full bg-gray-200 text-xs flex left-0">
            {item.btn_text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
