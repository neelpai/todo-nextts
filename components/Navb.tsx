import img from "./img_avatar.png";
import Image from "next/image";
import { useState } from "react";

interface Pageswitchprop {
  currpageStatus: number;
  setcurrpageStatus: React.Dispatch<React.SetStateAction<number>>;
  dispaddmodal: boolean;
  setdispaddmodal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navb = ({
  currpageStatus,
  setcurrpageStatus,
  dispaddmodal,
  setdispaddmodal,
}: Pageswitchprop) => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="basis-1/5 my-5">
        <span className=" text-white cursor-pointer  text-2xl">To-Do App</span>
      </div>
      <div className="basis-3/5 h-full  w-3/4 cursor-pointer text-center">
        <div
          className={
            currpageStatus === 0
              ? "bg-slate-700 my-3 rounded-md "
              : " my-3 rounded-md "
          }
          onClick={() => {
            setcurrpageStatus(0);
          }}
        >
          <span className=" text-white "> Pending </span>
        </div>
        <div
          className={
            currpageStatus === 1
              ? "bg-slate-700 my-3 rounded-md "
              : " my-3 rounded-md "
          }
          onClick={() => {
            setcurrpageStatus(1);
          }}
        >
          <span className=" text-white">Completed</span>
        </div>
        <div
          className={
            currpageStatus === 2
              ? "bg-slate-700 my-3 rounded-md "
              : " my-3 rounded-md "
          }
          onClick={() => {
            setcurrpageStatus(2);
          }}
        >
          <span className=" text-white">Archived</span>
        </div>
      </div>
      <div className="basis-1/5  ">
        <button
          type="button"
          className="bg-blue-400 rounded-sm m-3 p-2"
          onClick={() => {
            setdispaddmodal(true);
          }}
        >
          {" "}
          Add To-do +
        </button>
      </div>
      <div className="basis-1/5  w-full flex flex-col-reverse ">
        <div className="flex flex-row items-center ml-3 mb-3 ">
          <Image
            width={50}
            alt=""
            className="rounded-full"
            height={40}
            src={img}
          />
          <span className=" mx-3 text-white bottom-0"> Hello Shyam </span>
        </div>
      </div>
    </div>
  );
};

export default Navb;
