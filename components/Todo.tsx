import { BsFillPencilFill } from "react-icons/bs";
import { ImBin2 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { toEditorSettings } from "typescript";
import { Todo } from "../pages/model";
import { useState , useEffect } from "react";


interface ITodoProps{
    id: number;
    todo: string;
    isDone: boolean;
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todo = ({ id, todo, isDone, todos, settodos }: ITodoProps) => {
  const [edit, setedit] = useState<boolean>(false);

  const [editTodo, seteditTodo] = useState<string>(todo);
  const handleDone = (id: number) => {
    settodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !isDone } : item
      )
    );
  };

  useEffect(() => {
    
  }, [editTodo])
  

  const handleDelete = (id: number) => {
    settodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div className="bg-yellow-200 flex flex-row mt-5 items-center w-3/6 h-12">
      {edit ? (
        <div className="mx-4 basis-3/4">
          <input
            type="text"
            className="bg-white w-full rounded-md"
            value={editTodo}
            onChange={ (e)=>{
              seteditTodo(e.target.value)
              settodos( todos.map ( (item)=>
              item.id === id ?{...item, todo: editTodo} : item))
            }}
          ></input>
        </div>
      ) : (
        <span className="mx-4 basis-3/4">{todo}</span>
      )}

      <div className="basis-1/4 flex items-start">
        <BsFillPencilFill
          className="basis-1/3"
          onClick={() => {
            if (!edit && !isDone) {
              setedit(true);
            }
            if(edit){
              setedit
            }
          }}
        />
        <ImBin2 className="basis-1/3" onClick={() => handleDelete(id)} />
        {!isDone ? (
          <TiTick className="basis-1/3 " onClick={() => handleDone(id)} />
        ) : (
          <RxCross2 className="basis-1/3" onClick={() => handleDone(id)} />
        )}
      </div>

      {/* <span className="right-0 flex-1">{ isDone ?"Done" : "Pending"}</span> */}
    </div>
  );
};

export default Todo;
