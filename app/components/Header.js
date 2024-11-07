import { HeaderLogo } from "./HeaderLogo.js";
import { HeaderList } from "./HeaderList.js";
import { HeaderBtnMenu } from "./HeaderBtnMenu.js";

export function Header(){
   const $header=document.createElement("header"),    
    $nav=document.createElement("nav");
    
    $header.classList.add("header")
    $header.classList.add("container")

    $nav.classList.add("header__nav")
    $nav.classList.add("nav")

    $header.appendChild($nav)

    $nav.appendChild(HeaderLogo());
    $nav.appendChild(HeaderList());
    $nav.appendChild(HeaderBtnMenu());
    
    return $header;
}