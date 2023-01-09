import { MdOutlineArchive } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { Todo } from "../pages/model";
interface cardProp {
  currpageStatus: number;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: string;
  category: number;
  id: number;
  setdispeditmodal: React.Dispatch<React.SetStateAction<boolean>>;
  dispeditmodal: boolean;
  setidForEditTodo: React.Dispatch<React.SetStateAction<number>>;
  idForEditTodo: number;
}
function Card({
  currpageStatus,
  todos,
  settodos,
  todo,
  category,
  id,
  dispeditmodal,
  setdispeditmodal,
  setidForEditTodo,
  idForEditTodo,
}: cardProp) {
  const deleteCard = (id: number) => {
    // console.log(id);
    let temptodo = todos.filter((item) => item.id !== id);
    settodos(temptodo);
    console.log(temptodo);
  };

  const editCardbyModal = (id: number) => {
    setdispeditmodal(true);
    setidForEditTodo(id);
  };

  const handleArchivetodo = (id: number) => {
    // console.log(id);
    let temptodo = todos.filter((item) => {
      if (item.id === id) {
        item.category = 2;
        return item;
      } else {
        return item;
      }
    });
    settodos(temptodo);
  };

  const handleCompletedTodo = (id: number) => {
    let temptodo = todos.filter((item) => {
      if (item.id === id) {
        item.category = 1;
        return item;
      } else {
        return item;
      }
    });
    settodos(temptodo);
  };

  const handlePendingTodo = (id: number) => {
    let temptodo = todos.filter((item) => {
      if (item.id === id) {
        item.category = 0;
        return item;
      } else {
        return item;
      }
    });
    settodos(temptodo);
  };
  return (
    <div className="bg-yellow-300 h-48 border-2 items-center ">
      <h2 className="text-center my-3">Todo id : {id}</h2>
      <div className="flex flex-row h-24  items-center  ">
        <span className=" basis-4/5 text-center  my-3 ">{todo}</span>
        <BsPencilFill
          className="basis-1/5 my-3 text-2xl"
          onClick={() => editCardbyModal(id)}
        />
      </div>

      <div className="flex flex-row  h-16 ">
        {currpageStatus === 0 ? (
          <>
            <MdOutlineArchive
              onClick={() => {
                handleArchivetodo(id);
              }}
              className="basis-1/3 text-4xl "
            />
            <TiTick
              onClick={() => {
                handleCompletedTodo(id);
              }}
              className=" basis-1/3  text-4xl"
            />
            <AiFillDelete
              onClick={() => {
                deleteCard(id);
              }}
              className=" basis-1/3  text-4xl"
            />
          </>
        ) : currpageStatus === 1 ? (
          <>
            <MdOutlineArchive
              onClick={() => {
                handleArchivetodo(id);
              }}
              className=" basis-1/3 text-4xl "
            />
            <MdPendingActions
              onClick={() => {
                handlePendingTodo(id);
              }}
              className=" basis-1/3  text-4xl"
            />
            <AiFillDelete
              onClick={() => {
                deleteCard(id);
              }}
              className=" basis-1/3  text-4xl"
            />
          </>
        ) : (
          <>
            <MdPendingActions
              onClick={() => {
                handlePendingTodo(id);
              }}
              className=" basis-1/3 text-4xl "
            />
            <TiTick
              onClick={() => {
                handleCompletedTodo(id);
              }}
              className=" basis-1/3  text-4xl"
            />
            <AiFillDelete
              onClick={() => {
                deleteCard(id);
              }}
              className=" basis-1/3  text-4xl"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
