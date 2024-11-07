export function Item3(){
    const $a=document.createElement("a"),
    $spam=document.createElement("spam");

    $a.classList.add("menu__a");
    $a.href = "#";
    $a.id="btn_surface";   
    $a.setAttribute("data-menu", "surface");


    $spam.classList.add("menu__a__spam");
    $spam.textContent="03";

    $a.appendChild($spam);
    $a.appendChild(document.createTextNode(" surface"));

  

   return $a
}