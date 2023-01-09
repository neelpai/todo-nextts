import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./Dropdown";
import { Todo } from "../pages/model";

interface Editmodalprops {
  dispeditmodal: Boolean;
  setdispeditmodal: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setidForEditTodo: React.Dispatch<React.SetStateAction<number>>;
  idForEditTodo: number;
}
const EditModal = ({
  todos,
  settodos,
  dispeditmodal,
  setdispeditmodal,
  idForEditTodo,
  setidForEditTodo,
}: Editmodalprops) => {
  const [editsingletodo, seteditsingletodo] = useState<Todo>({
    id: -1,
    todo: "",
    category: 0,
  });

  useEffect(() => {
    let temptodo = todos.filter((item) => item.id === idForEditTodo);
    
    seteditsingletodo(temptodo[0]);
    // if (editsingletodo) {

    // }
  }, [idForEditTodo, dispeditmodal]);

  return (
    <div>
      {dispeditmodal && editsingletodo.id > 0 && (
        <>
          <div className="fixed z-10 inset-1/2  border-2">
            <div className="bg-slate-200 ml-[-150px] mt-[-150px] px-4 py-4 rounded-md h-[300px] w-[300px] ">
              <div className="border-5 w-full ">
                <RxCross1
                  className="right-0"
                  onClick={() => {
                    setdispeditmodal(false);
                  }}
                />
                <h4 className="my-2 py-4 ">Edit Todo </h4>
                <form>
                  <input
                    type="text"
                    value={editsingletodo?.todo}
                    className="bg-white  h-8 rounded-md px-3"
                    onChange={(e) => {
                      seteditsingletodo({
                        ...editsingletodo,
                        todo: e.target.value,
                      });
                     
                    }}
                  />
                  <h4 className="my-2 py-4 ">Category </h4>
                  <DropDown
                    editsingletodo={editsingletodo}
                    seteditsingletodo={seteditsingletodo}
                  />
                  <button
                    type="button"
                    className="bg-green-600 rounded-md my-4 w-20"
                    onClick={() => {
                      setdispeditmodal(false);
                      let temptodoforedit = todos.filter((item) => {
                        if (item.id === idForEditTodo) {
                          item.category = editsingletodo.category;
                          item.todo = editsingletodo.todo;
                          return item;
                        } else {
                          return item;
                        }
                      });
                      settodos(temptodoforedit);
                    }}
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditModal;
