export function MainFigureImg2(){
    
    const $img=document.createElement("img");

    $img.classList.add("main__img");
    $img.classList.add("main__img_1");
    $img.id="img2";
    $img.alt="Planet_internal";
    $img.src="./app/assets/images/planet-earth-internal.svg"
    
    

    return $img
}