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
  const scrollRoll = useRef<null | HTMLParagraphElement>(null);
  const scrollUnroll = useRef<null | HTMLParagraphElement>(null);
  function renderCollapsed() {
    return (
      <div
        onClick={handleClick}
        className="workItem text-center h-100 p-4 m-4 rounded-xl hover:drop-shadow-xl"
        
      >
        <h2>{props.name}</h2>
        <img
          className="aspect-auto w-sm"
          src={props.pict}
        />
        <h3>{props.year}</h3>
        <p ref={scrollRoll}>{props.desc}</p>
        <div></div>
      </div>
    );
  }

  function renderUnrolled() {
    return (
      <div
        onClick={handleClick}
        className="text-center workItem col-span-3 items-center content-center transition p-4 m-4 rounded-xl hover:drop-shadow-xl"
        
      >
        <h2>{props.name}</h2>
        <img
          className="aspect-auto p-2"
          src={props.pict}
        />
        <h2 className="p-2">{props.year}</h2>
        <p ref={scrollUnroll}>{props.longer}</p>
        <div ></div>
      </div>
    );
  }

  function handleClick() {
    setCollapsed(!collapsed);
      collapsed ? scrollUnroll.current?.scrollIntoView() : scrollUnroll.current?.scrollIntoView;
  }
  return collapsed ? renderCollapsed() : renderUnrolled();
}
