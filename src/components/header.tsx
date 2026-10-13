import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Desktop() {
  return (
    <div className="md:fixed  w-screen z-10 h-10 flex justify-center items-center p-4">
      <div className="flex gap-2 p-4">
        <ul className="flex space-x-6">
          <li className="text-center hover:text-white">
            <a href="/#">home</a>
          </li>
          <li className="text-center hover:text-white">
            <a href="/#bio">bio</a>
          </li>
          <li className="text-center hover:text-white">
            <a href="/#works">works</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Mobile() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="menu"
      className="fixed  w-screen z-10 h-12 flex justify-center items-center p-4"
    >
      <i
        id="menu"
        className="items-center"
        onClick={() => {
          setMenuOpen(!MenuOpen);
        }}
      >
        <img className="justify-center" src="hamburger.svg"></img>
      </i>
      {MenuOpen && (
        <div
          id="menu"
          className={
            "absolute xl:hidden top-12 left-0 w-full flex flex-col backdrop-blur-sm items-center gap-6"
          }
        >
          <a
            id="menu"
            className="list-none w-full text-center p-4 hover:bg-sky-200 hover:text-white"
            href="/#"
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
          >
            Home
          </a>
          <a
            id="menu"
            className="list-none w-full text-center p-4 hover:bg-sky-200 hover:text-white"
            href="/#bio"
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
          >
            Bio
          </a>
          <a
            id="menu"
            className="list-none w-full text-center p-4 hover:bg-sky-200 hover:text-white"
            href="/#works"
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
          >
            Works
          </a>
        </div>
      )}
    </div>
  );
}
export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return isMobile ? <Mobile /> : <Desktop />;
}
