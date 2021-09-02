import { useMutation } from "blitz"

import { useActionItem } from "app/core/hooks/useActionItem"
import React, { useCallback, useEffect } from "react"
import createActionCard from "app/auth/mutations/createActionCard"
import { useState } from "react"

import { useDrop } from "react-dnd"

import { InsightItems } from "./InsightsCard"
import Card from "./Card"
import ActionTextCol from "./ActionTextCol"
import Layout from "app/core/layouts/Layout"

const ActionCardsValues = () => {
  const actionItems = useActionItem()
  const [createActionCardMutation] = useMutation(createActionCard)
  const [actiontext, setactiontext] = useState("Please add the text")
  const [loader, setloader] = useState(false)
  const [test, settest] = useState(false)

  const [insightItem, setInsightItem] = useState([])
  // Drop card
  const onDrop = (item, index) => {
    setInsightItem((prevItems) => [...prevItems, InsightItems[item.id - 1]])
  }
  console.log("insight items :", insightItem)

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
              cardText={actionItem.CARD_TEXT}
            />
          </div>
        ))}
      </div>{" "}
    </>
  )
}

ActionCardsValues.authenticate = { redirectTo: "/" }
ActionCardsValues.getLayout = (page) => <Layout title="ActionCardsValues">{page}</Layout>

export default ActionCardsValues
