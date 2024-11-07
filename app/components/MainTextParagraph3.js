export function MainTextParagraph3(){
    const $paragraph=document.createElement("p")

    $paragraph.classList.add("main__texts__paragrafp")
    $paragraph.classList.add("main__texts__paragrafp__3")
    $paragraph.id="paragraph3";
    $paragraph.textContent="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."

    return $paragraph
}