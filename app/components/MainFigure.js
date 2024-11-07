import { MainFigureImg1 } from "./MainFigureImg1.js"
import { MainFigureImg2 } from "./MainFigureImg2.js"
import { MainFigureImg3 } from "./MainFigureImg3.js"

export function MainFigure(){
    const $figure=document.createElement("figure")

    $figure.classList.add("main__figure")
    $figure.classList.add("container")

    $figure.appendChild(MainFigureImg1())
    $figure.appendChild(MainFigureImg2())
    $figure.appendChild(MainFigureImg3())

    return $figure
}