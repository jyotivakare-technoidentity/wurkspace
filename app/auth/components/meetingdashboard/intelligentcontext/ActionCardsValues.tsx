import { useMutation } from "blitz"
// import Layout from "app/core/layouts/Layout"

import { useActionItem } from "app/core/hooks/useActionItem"
import React, { useCallback, useEffect } from "react"
import createActionCard from "app/auth/mutations/createActionCard"
import { useState } from "react"
// import { Suspense } from "react";
// import DiscussionCard from "app/auth/components/meetingdashboard/ActionCard/DiscussionCard"
// import DragActionItems from "./DragActionItems"

import { useDrop } from "react-dnd"

import { InsightItems } from "./InsightsCard"
import Card from "./Card"
import DragActionItems from "./DragActionItems"
import ActionTextCol from "./ActionTextCol"
//import update from "immutability-helper"

const ActionCardsValues = () => {
  const actionItems = useActionItem()
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState("Please add the text")
  const [loader, setloader] = useState(false)
  const [test, settest] = useState(false)
  // useEffect(() => {
  //   settest(!test)
  //   setloader(false)
  // }, [actionItems])

  //  drag card

  const [insightItem, setInsightItem] = useState([])

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "insight",
  //   drop: (item) => addItemToBoard(item?.id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),

  //   // hover
  // }))

  // const handleDrop = useCallback(
  //   (index: number, item: { name: string }) => {
  //     console.log("dropped");
  //     const { name } = item;
  //     console.log(item);
  //     setDroppedBoxNames(
  //       update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
  //     );
  //     // setDustbins(update(dustbins, { $merge: { b: 6, c: 7 } }));
  //     setDustbins(
  //       update(dustbins, {
  //         [index]: {
  //           b: {
  //             $set: item
  //           }
  //         }
  //       })
  //     );
  //   },
  //   [droppedBoxNames, dustbins]
  // );

  const onDrop = (item, index) => {
    console.log("item  : " + item.id + " index of the card :" + index)
    console.log("inndexxxxxxx   :" + InsightItems[item.id - 1]?.btn_text)

    //setInsightItem([...insightItem, InsightItems?[item.id - 1]])

    // setItems((prevState) => {
    //   const newItems = prevState
    //     .filter((i) => i.id !== item.id)
    //     .concat({ ...item, status, icon: mapping.icon });
    //   return [...newItems];
    // });

    // setInsightItem((prevState) => {
    //   const newItems = prevState.filter((i) => i.id !== item.id).concat({ ...InsightItemsList })
    //   return [...newItems]
    // })
  }
  console.log(insightItem)

  // const addItemToBoard = (id) => {
  //   // const InsightItemsList = InsightItems.filter((item) => id === item.id);
  //   // setInsightItem(insightItem.splice(id, 0, InsightItemsList[0]))

  //   setInsightItem(() => {
  //     const InsightItemsList = InsightItems.filter((item) => id === item.id)
  //     // InsightItemsList.splice(id, 0, InsightItemsList[0]);
  //     return [...InsightItemsList]
  //     console.log(InsightItemsList)
  //   })

  //   // console.log(insightItem)
  // }
  // console.log(insightItem)

  return (
    <>
      {" "}
      <div className="flex">
        {actionItems?.map((actionItem, idx) => (
          <div key={actionItem.ID}>
            <ActionTextCol
              actionItem={actionItem}
              onDrop={onDrop}
              index={idx}
              insightItem={insightItem}
              cardText={actionItem.AGENDA_TYPE}
            />
          </div>
        ))}
      </div>{" "}
    </>
  )
}

// ActionCardsValues.authenticate = { redirectTo: "/" }
// ActionCardsValues.getLayout = (page) => <Layout title="ActionCardsValues">{page}</Layout>

export default ActionCardsValues
