import React, { useState , useEffect} from "react";
import {Todo} from '../pages/model'

interface dropDownprops{
  editsingletodo : Todo;
  seteditsingletodo : React.Dispatch<React.SetStateAction<Todo>>
}
const Dropdown = ({editsingletodo , seteditsingletodo} : dropDownprops) => {
  const [valueDropdown, setvalueDropdown] = useState(editsingletodo.category);
  const [displayDropdown, setdisplayDropdown] = useState(false);

  useEffect(() => {
    seteditsingletodo( {...editsingletodo , category : valueDropdown})  
  }, [valueDropdown])
  
  return (
    <div>
      <div className="relative inline-block text-left border-2">
        <div>
          <button
            type="button"
            className="inline-flex w-full  justify-center rounded-md  border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button"
            onClick={() => {
              setdisplayDropdown(true);
              if (displayDropdown) {
                setdisplayDropdown(false);
              }
            }}
          >
            {valueDropdown === 0
              ? "Pending"
              : valueDropdown === 1
              ? "Completed"
              : "Archived"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </button>
        </div>
        {displayDropdown && (
          <div
            className="absolute right-0 z-10 mt-2 w-33 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                
                onClick={(e) => {
                  console.log("Pending");
                  setdisplayDropdown(false);
                  setvalueDropdown(0);
                }}
              >
                Pending
              </a>
              <hr />
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                
                onClick={(e) => {
                  console.log("Completed");
                  setdisplayDropdown(false);
                  setvalueDropdown(1);
                }}
              >
                Completed
              </a>
              <hr />
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                
                onClick={(e) => {
                  console.log("Archived");
                  setdisplayDropdown(false);
                  setvalueDropdown(2);
                }}
              >
                Archived
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
