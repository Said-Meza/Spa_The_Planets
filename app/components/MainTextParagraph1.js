export function MainTextParagraph1(){
    const $paragraph=document.createElement("p")

    $paragraph.classList.add("main__texts__paragrafp")
    $paragraph.id="paragraph1";
    $paragraph.textContent="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."

    return $paragraph
}