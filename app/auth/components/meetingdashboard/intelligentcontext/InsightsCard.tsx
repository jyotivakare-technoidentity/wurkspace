import Card from "./Card"
import { useInsightItem } from "app/core/hooks/useInsightItem"

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
  const insightItems = useInsightItem()
  return (
    <>
      {InsightItems.map((item, idx) => {
        return <Card key={idx} item={item} />
      })}
    </>
  )
}
export default InsightsCard
