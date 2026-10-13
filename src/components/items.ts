import type { ItemProps } from "./work-item";
import bstrat from "/bstrat.png";
import levedad from "/levedad_16.png";
import stereophyta from "/m-stereophyta.png";
import simsphere from "/m-simianSphere.gif";

export const items: ItemProps[] = [
  //{name:"Crabble", year:2026, desc:"Web game about crabs in a bucket", pict:"src/assets/m-stereophyta.png"},
  {
    name: "The Brooklyn Strategist",
    year: '2026',
    desc: "Redesigned website for The Brooklyn Strategist",
    longer:"While working at The Brooklyn Strategist, I noticed the company website was woefully out of date. I did a full redesign of the site after doing qualitative user research. ",
    pict: bstrat,
    index: 0,
  },
  {
    name: "Simian Sphere",
    year: '2017',
    desc: "Holographic game made for Looking Glass",
    longer: "I interned for Looking Glass Factory in 2017. They were prototyping a holographic display that used a lenticular screen overlay and two simultaneous images to create a glasses-free 3D effect. I made Simian Sphere in Unity while working there, and you can read about my design in this article I wrote.",
    pict: simsphere,
    index: 1,
  },
  {
    name: "Stereophyta",
    year: '2017',
    desc: "Game about farming and music",
    pict: stereophyta,
    longer: "Stereophyta was a group project in my Intermediate Game Development class while at the NYU Game Center. It's a game about farming musical fruits, and the field you plow and plant functions as a sequencer.",
    index: 2,
  },
  {
    name: "Levedad",
    year: '2016',
    desc: "IGF Student award nominee",
    longer: "I did the audio design and music for my very talented friend Julian Cordero's game Levedad. It's a game about long exposure photography and childhood memory, it was nominated at AMAZE Berlin and the Independent Game Festival.",
    pict: levedad,
    index: 3,
  },
];
