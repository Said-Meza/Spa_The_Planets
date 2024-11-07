export function MainDataBox2(){
    
    const $mainBox= document.createElement("section"),  
     $h2= document.createElement("h2"),  
     $h1= document.createElement("h1")  
    
    $mainBox.classList.add("main__data__container")
    $h2.classList.add("main__data__title")
    $h2.textContent="revolution time"

    $h1.classList.add("main__data__data")
    $h1.id="revolution";
    $h1.textContent="365.26 Days";
    
    $mainBox.appendChild($h2)
    $mainBox.appendChild($h1)
    

    return $mainBox
}