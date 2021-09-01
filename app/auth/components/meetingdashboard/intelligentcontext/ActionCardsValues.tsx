import { useRouter, BlitzPage, Routes, useMutation } from "blitz";
import Layout from "app/core/layouts/Layout";

import { useActionItem } from "app/core/hooks/useActionItem";
import React, { useEffect } from "react";
import createActionCard from "app/auth/mutations/createActionCard";
import { useState } from "react";
// import { Suspense } from "react";
import DiscussionCard from "app/auth/components/meetingdashboard/ActionCard/DiscussionCard";


import {  useDrop } from "react-dnd";

import {InsightItems} from './InsightsCard'
import Card from './Card'




const ActionCardsValues = () => {
  const actionItems = useActionItem();
  const [createActionCardMutation] = useMutation(createActionCard);
  const [actiontext, setactiontext] = useState("Please add the text");
  const [loader, setloader] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
    settest(!test);
    setloader(false);
  }, [actionItems]);

  //  drag card

  const [insightItem, setInsightItem] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "insight",
    drop: (item) => addItemToBoard(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),

    // hover
  }));

  const addItemToBoard = (id) => {
    // const InsightItemsList = InsightItems.filter((item) => id === item.id);
    // setInsightItem(insightItem.splice(id, 0, InsightItemsList[0]))

    // console.log(insightItem)

    setInsightItem(() => {
      const InsightItemsList = InsightItems.filter((item) => id === item.id);
      // InsightItemsList.splice(id, 0, InsightItemsList[0]);
      return [...InsightItemsList];
      console.log(InsightItemsList)
    });

    // console.log(insightItem)
  };
  console.log(insightItem);

  return (
    <>
      {" "}
      <div className="flex" ref={drop}>

        { actionItems?.map((actionItem) => (
            <div key={actionItem.ID}>
              <div className=" flex">
                <div className="bg-blue w-full p-0.5 min-h-screen	mt-6 flex">
                  <div className="rounded bg-gray-100 w-72">
                    <div
                      className={`${actionItem.COLOR} board_text	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
                    >
                      {actionItem.CARD_TEXT}
                    </div>

                    {insightItem
                      .filter((i) => i.id === actionItem.ID)
                      .map((item, idx) => {
                        return (
                          <Card
                            key={idx}
                            text={item.text}
                            btn_text={item.btn_text}
                            id={item.id}
                            idx={idx}
                          />
                        );
                      })}
                    <DiscussionCard />
                    {loader && <>Loading...</>}
                    <div className="flex items-center justify-center shadow-2xl m-3">
                      <div className="rounded-full h-6 w-6 flex items-center justify-center flash_icons hover:cursor-pointer">
                        <a
                          onClick={() => {
                            const agendaDetailId = actionItem.ID;
                            createActionCardMutation({
                              actiontext,
                              agendaDetailId,
                            });
                            setloader(true);
                          }}
                        >
                          <img src="/plusicon.png"></img>
                        </a>
                      </div>
                      <div className="rounded-full h-6 w-6 ml-4 flex items-center justify-center flash_icons hover:cursor-pointer">
                        <a>
                          <img src="/mask.png"></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>{" "}
    </>
  );
};

ActionCardsValues.authenticate = { redirectTo: "/" };
ActionCardsValues.getLayout = (page) => <Layout title="ActionCardsValues">{page}</Layout>;

export default ActionCardsValues;
