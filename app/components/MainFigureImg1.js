export function MainFigureImg1(){
    
    const $img=document.createElement("img");

    $img.classList.add("main__img");
    $img.id="img1";
    $img.alt="Planet";
    $img.src="./app/assets/images/planet-earth.svg"
    

    return $img
}