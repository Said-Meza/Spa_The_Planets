import { MainTextTitle } from "./MainTextTitle.js"
import { MainTextParagraph1 } from "./MainTextParagraph1.js"
import { MainTextParagraph2 } from "./MainTextParagraph2.js"
import { MainTextParagraph3 } from "./MainTextParagraph3.js"
import { MainTextLink1 } from "./MainTextLink1.js"
import { MainTextLink2 } from "./MainTextLink2.js"
import { MainTextLink3 } from "./MainTextLink3.js"

export function MainText(){
    
    const $mainText= document.createElement("section")
    
    $mainText.classList.add("main__texts")
    $mainText.classList.add("container")
    $mainText.classList.add("container__reverse_2")

    $mainText.appendChild(MainTextTitle())
    $mainText.appendChild(MainTextParagraph1())
    $mainText.appendChild(MainTextParagraph2())
    $mainText.appendChild(MainTextParagraph3())
    $mainText.appendChild(MainTextLink1())
    $mainText.appendChild(MainTextLink2())
    $mainText.appendChild(MainTextLink3())
    
    return $mainText
}