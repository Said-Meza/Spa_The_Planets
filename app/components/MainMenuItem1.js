export  function Item1(){

    const $a=document.createElement("a"),
     $spam=document.createElement("spam");

     $a.classList.add("menu__a");
     $a.href = "#";
     $a.id="btn_overview";   
     $a.setAttribute("data-menu", "overview");


     $spam.classList.add("menu__a__spam");
     $spam.textContent="01";

     $a.appendChild($spam);
     $a.appendChild(document.createTextNode(" overview"));


    return $a
}