import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
// import { Inter } from '@next/font/google'
import styles from "../styles/Home.module.css";
import { Todo } from "./model";
import Navb from "../components/Navb";
import Card from "../components/Card";

import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";

const Home: React.FC = () => {
  const [todos, settodos] = useState<Todo[]>([
    {
      id: 1,
      todo: "helo 1",
      category: 0,
    },
    {
      id: 2,
      todo: "helo 2",
      category: 1,
    },
    {
      id: 3,
      todo: "helo 3",
      category: 2,
    },
  ]);
  const [idForEditTodo, setidForEditTodo] = useState(-1);
  const [currpageStatus, setcurrpageStatus] = useState<number>(0);
  const [dispaddmodal, setdispaddmodal] = useState<boolean>(false);
  const [dispeditmodal, setdispeditmodal] = useState<boolean>(false);

  return (
    <div className="w-screen  ">
      {dispaddmodal ? (
        <AddModal
          todos={todos}
          settodos={settodos}
          dispaddmodal={dispaddmodal}
          setdispaddmodal={setdispaddmodal}
        />
      ) : dispeditmodal ? (
        <EditModal
          idForEditTodo={idForEditTodo}
          setidForEditTodo={setidForEditTodo}
          todos={todos}
          settodos={settodos}
          dispeditmodal={dispeditmodal}
          setdispeditmodal={setdispeditmodal}
        />
      ) : (
        ""
      )}

      <div className={dispaddmodal || dispeditmodal ? "flex blur-sm" : "flex"}>
        <div className="basis-1/5">
          <Navb
            currpageStatus={currpageStatus}
            setcurrpageStatus={setcurrpageStatus}
            dispaddmodal={dispaddmodal}
            setdispaddmodal={setdispaddmodal}
          />
        </div>

        <div className="bg-indigo-500 overflow-y-scroll basis-4/5 h-screen flex flex-col items-center">
          <span className="  uppercase text-4xl mt-10">
            {currpageStatus === 2
              ? "Archived"
              : currpageStatus === 1
              ? "Completed"
              : "Pending"}
          </span>
          <div className="grid grid-cols-3 my-10  w-full px-20 grid-flow-row gap-12  ">
            {todos.map((item) => {
              if (item.category === currpageStatus) {
                return (
                  <>
                    <Card
                      dispeditmodal={dispeditmodal}
                      setdispeditmodal={setdispeditmodal}
                      idForEditTodo={idForEditTodo}
                      setidForEditTodo={setidForEditTodo}
                      key={item.id}
                      id={item.id}
                      todo={item.todo}
                      category={item.category}
                      currpageStatus={currpageStatus}
                      todos={todos}
                      settodos={settodos}
                    />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
