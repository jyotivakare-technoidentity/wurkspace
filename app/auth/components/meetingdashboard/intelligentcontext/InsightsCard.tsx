import Card from "./Card"

export const InsightItems = [
  {
    id: 1,
    text: "Create basic card for you.Create basic card for you",
    btn_text: "Learning",
  },
  {
    id: 2,
    text: "Create basic card for you.Create basic card for you",
    btn_text: "Priority",
  },
  {
    id: 3,
    text: "Create basic card for you.Create basic card for you",
    btn_text: "Feedback",
  },
]

export const InsightsCard = () => {
  // const [{isDragging}, dragRef] = useDrag(() => ({
  //   type:"insights",
  //   collect: (monitor) => ({
  //   isDragging: !!monitor.isDragging()
  // })
  // }))
  return (
    <>
      {InsightItems.map((item, idx) => {
        return <Card key={idx} item={item} />
      })}
      {/* {InsightItems}
      <div className="m-2">
        <div className="insights_sidebar p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className="text-black mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <button className="m-1 px-1 rounded-full bg-gray-200 text-xs flex left-0">
            Learning
          </button>
        </div>
      </div> */}
    </>
  )
}
export default InsightsCard
