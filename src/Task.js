import React from "react";
import { formatDistanceToNow , differenceInDays } from 'date-fns';



const Task = ({ taskObj, onComplete }) => {

  const spaceColor =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3 && differenceInDays(new Date(taskObj.deadline), new Date()) >= 0 ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"

  return (
    <div className="p-6 bg-[#fff] rounded-[5px] leading-normal mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.10)] ">
      <h3 className="text-lg text-orange-400">{taskObj.title}</h3>
      
      <div className="text-xs pt-1"> son teslim: <span className={spaceColor}>{formatDistanceToNow(new Date(taskObj.deadline))} </span></div>
      

      <p className="text-stone-600 text-sm pt-2 pb-3">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block p-[5px] px-3 text-sm border-solid border-1 border-gray-300 rounded border mr-1 mb-1.5" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0,0.05)] rounded-[3px] border-0 cursor-pointer " onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
