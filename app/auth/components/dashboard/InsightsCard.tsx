import { Draggable, Droppable } from "react-drag-and-drop"

export const InsightsCard = () => {
  return (
    <>
      <ul>
        {" "}
        <Draggable type="insight">
          <li>
            <div className="m-2">
              <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
                <p className="text-black mb-1 text-xs text-left">
                  Create basic card for youl.Create basic card for youl
                </p>
                <button className="m-1 px-1 rounded-full bg-gray-200 text-xs flex left-0">
                  Learning
                </button>
              </div>
            </div>
          </li>
        </Draggable>
      </ul>

      <div className="m-2">
        <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className="text-black mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <button className="m-1 px-1 rounded-full bg-gray-200 text-xs flex left-0">
            Priority
          </button>
        </div>
      </div>
      <div className="m-2">
        <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className="text-black mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <button className="m-1 px-1 rounded-full bg-gray-200 text-xs flex left-0">
            Feedback
          </button>
        </div>
      </div>
    </>
  )
}
export default InsightsCard
