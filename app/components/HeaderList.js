export function HeaderList(){

     const $divcontainer=document.createElement("div"),
         $ul =document.createElement("ul"),
         $li1 =document.createElement("li"),
         $li2 =document.createElement("li"),
         $li3 =document.createElement("li"),
         $li4 =document.createElement("li"),
         $li5 =document.createElement("li"),
         $li6 =document.createElement("li"),
         $li7 =document.createElement("li"),
         $li8 =document.createElement("li"),
         $a1 =document.createElement("a"),
         $a2 =document.createElement("a"),
         $a3 =document.createElement("a"),
         $a4 =document.createElement("a"),
         $a5 =document.createElement("a"),
         $a6 =document.createElement("a"),
         $a7 =document.createElement("a"),
         $a8 =document.createElement("a");

     $divcontainer.classList.add("header__nav__list")
     $ul.classList.add("header__list")
     $li1.classList.add("list__item");
     $li2.classList.add("list__item");
     $li3.classList.add("list__item");
     $li4.classList.add("list__item");
     $li5.classList.add("list__item");
     $li6.classList.add("list__item");
     $li7.classList.add("list__item");
     $li8.classList.add("list__item");
     $a1.classList.add("list__item__a")
     $a2.classList.add("list__item__a")
     $a3.classList.add("list__item__a")
     $a4.classList.add("list__item__a")
     $a5.classList.add("list__item__a")
     $a6.classList.add("list__item__a")
     $a7.classList.add("list__item__a")
     $a8.classList.add("list__item__a")
     $a1.href="#q=mercury"
     $a2.href="#q=venus"
     $a3.href="#q=earth" 
     $a4.href="#q=mars"
     $a5.href="#q=jupiter"
     $a6.href="#q=saturn"
     $a7.href="#q=uranus"
     $a8.href="#q=neptune"
     $a1.textContent="mercury"
     $a2.textContent="venus"
     $a3.textContent="earth"
     $a4.textContent="mars"
     $a5.textContent="jupiter"
     $a6.textContent="saturn"
     $a7.textContent="uranus"
     $a8.textContent="neptune"

    $li1.appendChild($a1)
    $li2.appendChild($a2)
    $li3.appendChild($a3)
    $li4.appendChild($a4)
    $li5.appendChild($a5)
    $li6.appendChild($a6)
    $li7.appendChild($a7)
    $li8.appendChild($a8)

    $ul.appendChild($li1)
    $ul.appendChild($li2)
    $ul.appendChild($li3)
    $ul.appendChild($li4)
    $ul.appendChild($li5)
    $ul.appendChild($li6)
    $ul.appendChild($li7)
    $ul.appendChild($li8)
     $divcontainer.appendChild($ul)



    return $divcontainer;  
   }