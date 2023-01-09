import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {Todo} from '../pages/model'

interface Addmodalprops{
  dispaddmodal : Boolean;
  setdispaddmodal : React.Dispatch<React.SetStateAction<boolean>>;
  todos :  Todo[];
  settodos : React.Dispatch<React.SetStateAction<Todo[]>>;

}
const AddModal = ({ dispaddmodal, setdispaddmodal , todos, settodos}: Addmodalprops) => {
  
  const [addtodo, setaddtodo] = useState({ id : Date.now() , todo  : "", category : 0});
  
  return (
    <div>
      {dispaddmodal && (
        <div className="fixed z-10 inset-1/2  border-2">
          <div className="bg-slate-200 ml-[-150px] mt-[-150px] px-4 py-4 rounded-md h-[300px] w-[300px] ">
            <div className="border-5 w-full ">
              <RxCross1
                className="right-0"
                onClick={() => {
                  setdispaddmodal(false);
                }}
              />
            </div>

            <h4 className="my-2 py-4 ">Add Todo </h4>
            <form >
              <input
                type="text"
                value={addtodo.todo}
                className="bg-white rounded-md px-3 h-8"
                onChange={(e) => {
                  setaddtodo({...addtodo, todo: e.target.value})
                }}
              />
              <h4 className="my-2 py-4 ">Category </h4>

              <div className=" flex flex-col   overflow-hidden">
                <div className="flex">
                  <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer "
                      // checked={addtodo.category}
                      readOnly
                    />
                    <div
                      onClick={() => {

                        let temptodo = {...addtodo}
                       
                        {
                          temptodo.category ===1 ? temptodo.category =0  :  temptodo.category =1
                        }
                        
                        setaddtodo({...temptodo})
                        
                        
                      }}
                      className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {!addtodo.category? "Pending" : "Completed"}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                 className="bg-green-600 rounded-md my-4 w-20"
                onClick={() => {
                  
                  setdispaddmodal(false);
                  let temptodo = todos
                  
                  temptodo.push(addtodo)
                  



                }}
              > Add </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModal;
