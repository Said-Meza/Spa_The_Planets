import { MainDataBox1 } from "./MainDataBox1.js"
import { MainDataBox2 } from "./MainDataBox2.js"
import { MainDataBox3 } from "./MainDataBox3.js"
import { MainDataBox4 } from "./MainDataBox4.js"

export function MainData(){
    
    const $mainData= document.createElement("section")
    
    $mainData.classList.add("main__data")
    $mainData.classList.add("container")
    $mainData.classList.add("container__modifiquer")

    $mainData.appendChild(MainDataBox1())
    $mainData.appendChild(MainDataBox2())
    $mainData.appendChild(MainDataBox3())
    $mainData.appendChild(MainDataBox4())

    return $mainData
}