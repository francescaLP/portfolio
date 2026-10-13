import WorkItem from "./work-item";
import { items } from "./items";


export default function Works() {
  function displayWorks() {
    return (
      <div
        className="py-8 works grid md:grid-cols-4 justify-center items-center"
        id="works"
      >
        {items.map((i) => {
          return (
            <WorkItem className="work-container" name={i.name} longer={i.longer} pict={i.pict} year={i.year} desc={i.desc} key={i.index} />
          );
        })}
      </div>
    );
  }
  return displayWorks();
}
