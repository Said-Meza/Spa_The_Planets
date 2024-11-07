import { Item1 } from "./MainMenuItem1.js"
import { Item2 } from "./MainMenuItem2.js"
import { Item3 } from "./MainMenuItem3.js"

export function MainMenu(){

   const $section1=document.createElement("section"),
    $section2=document.createElement("section")
   
    $section1.classList.add("main__menu")
    $section1.classList.add("container")
    $section1.classList.add("container__reverse_1")
    $section2.classList.add("main__menu__container")

    $section2.appendChild(Item1())
    $section2.appendChild(Item2())
    $section2.appendChild(Item3())

    $section1.appendChild($section2)

    

   

    return $section1
}