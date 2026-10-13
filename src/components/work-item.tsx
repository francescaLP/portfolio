import { devNull } from "os";
import { useState, useRef } from "react";

export interface ItemProps {
  name: string;
  year: string;
  desc: string;
  pict: string;
  index: number;
  longer: string;
}
export interface dProps {
  brief: string;
  cont: string;
  long: string;
}

export default function WorkItem(props) {
  const [collapsed, setCollapsed] = useState(true);
  const scrollThis = useRef(devNull);
  function renderCollapsed() {
    return (
      <div
        onClick={handleClick}
        className="workItem text-center justify-items-center justify-content-center h-100 p-4 m-4 rounded-xl hover:drop-shadow-xl"
        
      >
        <h2>{props.name}</h2>
        <img
          className="scale-with-grid aspect-auto w-sm"
          src={props.pict}
        />
        <h3>{props.year}</h3>
        <p ref={scrollThis}>{props.desc}</p>
        <div></div>
      </div>
    );
  }

  function renderUnrolled() {
    return (
      <div
        onClick={handleClick}
        className="text-center workItem col-span-3 justify-center items-center content-center transition p-4 m-4 rounded-xl hover:drop-shadow-xl"
        
      >
        <h2>{props.name}</h2>
        <img
          className="aspect-auto p-2"
          src={props.pict}
        />
        <h2 className="p-2">{props.year}</h2>
        <p>{props.longer}</p>
        <div ref={scrollThis}>bottom</div>
      </div>
    );
  }

  function handleClick() {
    setCollapsed(!collapsed);
    try{
      if(scrollThis != null){
        scrollThis.current.scrollIntoView();
      }
    } catch {
      alert('broke')
    }
  }
  return collapsed ? renderCollapsed() : renderUnrolled();
}
