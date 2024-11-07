
import { Header } from "./components/header.js";
import { Main } from "./components/Main.js";
import { Hr } from "./components/Hr.js";
import { Actives } from "./helpers/ActivesBtn.js";
import { ApiStart } from "./helpers/ApiStarts.js";


export function App(){
    
    const $root = document.getElementById("root");
     $root.innerHTML="";
     $root.appendChild(Header());
     $root.appendChild(Hr());
     $root.appendChild(Main());

    Actives()
    ApiStart()
      
    
}
