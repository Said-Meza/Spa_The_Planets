export function MainTextParagraph2(){
    const $paragraph=document.createElement("p")

    $paragraph.classList.add("main__texts__paragrafp")
    $paragraph.classList.add("main__texts__paragrafp__2")
    $paragraph.id="paragraph2";
    $paragraph.textContent="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."

    return $paragraph
    
}