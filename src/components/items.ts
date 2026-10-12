import type { ItemProps } from "./work-item";
import bstrat from '/bstrat.png'
import levedad from '/levedad_16.png'
import stereophyta from '/m-stereophyta.png'
import simsphere from '/m-simianSphere.gif'

export const items:ItemProps[] = [
    //{name:"Crabble", year:2026, desc:"Web game about crabs in a bucket", pict:"src/assets/m-stereophyta.png"},
    {name:"The Brooklyn Strategist", year:2026, desc:"Redesigned website for The Brooklyn Strategist", pict:bstrat,index:0},
    {name:"Simian Sphere", year: 2017, desc:"Holographic game made for Looking Glass",pict:simsphere,index:1}, 
    {name:"Stereophyta", year:2017, desc:"Game about farming and music",pict:stereophyta,index:2}, 
    {name:"Levedad", year:2016, desc:"IGF Student award nominee",pict:levedad,index:3},
];

