export function MainDataBox1(){
    
    const $mainBox= document.createElement("section"),  
     $h2= document.createElement("h2"),  
     $h1= document.createElement("h1")  
    
    $mainBox.classList.add("main__data__container")
    $h2.classList.add("main__data__title")
    $h2.textContent="rotation time"

    $h1.classList.add("main__data__data")
    $h1.id="rotation";
    $h1.textContent="0.99 days";
    
    $mainBox.appendChild($h2)
    $mainBox.appendChild($h1)
    

    return $mainBox
}