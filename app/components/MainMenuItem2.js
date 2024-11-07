export  function Item2(){
    const $a=document.createElement("a"),
    $spam=document.createElement("spam");

    $a.classList.add("menu__a");
    $a.href = "#";
    $a.id="btn_structure";   
    $a.setAttribute("data-menu", "structure");


    $spam.classList.add("menu__a__spam");
    $spam.textContent="02";

    $a.appendChild($spam);
    $a.appendChild(document.createTextNode(" structure"));


   return $a
    
}