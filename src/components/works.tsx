import WorkItem from "./work-item";
import { items } from "./items";


export default function Works() {
  function displayWorks() {
    return (
      <div
        className="py-8 works grid lg:grid-cols-4 flex justify-center justify-items-center"
        id="works"
      >
        {items.map((i) => {
          return (
            <WorkItem name={i.name} longer={i.longer} pict={i.pict} year={i.year} desc={i.desc} key={i.index} />
          );
        })}
      </div>
    );
  }
  return displayWorks();
}
