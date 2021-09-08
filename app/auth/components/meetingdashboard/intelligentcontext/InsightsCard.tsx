// import Card from "./Card"

// export const InsightItems = [
//   {
//     id: 1,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Learning",
//   },
//   {
//     id: 2,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Priority",
//   },
//   {
//     id: 3,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Challenges",
//   },
// ]

// export const InsightsCard = () => {
//   return (
//     <>
//       {InsightItems.map((item, idx) => {
//         return <Card key={idx} item={item} />
//       })}
//     </>
//   )
// }
// export default InsightsCard

import Card from "./Card"
import { useInsightsItem } from "app/core/hooks/useInsightsItems"
import { useEffect } from "react"

// export const insightItems = [
//   {
//     id: 1,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Learning",
//   },
//   {
//     id: 2,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Priority",
//   },
//   {
//     id: 3,
//     text: "Create basic card for you.Create basic card for you",
//     btn_text: "Feedback",
//   },
// ]

export interface InsightsItemType {
  ID: number
  CONTEXT_SECTION: string
  DISPLAY_FLAG: string
  CONTEXT_POINT_TEXT: string
  TAG_FOR_TOPIC: string
  EMPLOYEE_ID: string
  SOURCE_APPLICATION: string
}

export let InsightItems: InsightsItemType[] = []

export const InsightsCard = () => {
  InsightItems = useInsightsItem()
  // useEffect(() => {}, [InsightItems])
  return (
    <>
      {InsightItems.filter((i) => i.DISPLAY_FLAG === "Y").map((item, idx) => {
        return <Card key={idx} item={item} />
      })}
    </>
  )
}
export default InsightsCard
