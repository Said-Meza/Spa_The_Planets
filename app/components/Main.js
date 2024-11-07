
import { MainMenu } from "./MainMenu.js";
import { MainHr } from "./MainHr.js";
import { MainFigure } from "./MainFigure.js";
import { MainText } from "./MainText.js";
import { MainData } from "./MainData.js";

export function Main(){
    
    const $main=document.createElement("main"),
     $section=document.createElement("section")

    $main.classList.add("main")

    $section.classList.add("main__grid")

    $section.appendChild(MainMenu())
    $section.appendChild(MainHr())
    $section.appendChild(MainFigure())
    $section.appendChild(MainText())
    $section.appendChild(MainData())

    $main.appendChild($section)

   
    return $main
}