export function HeaderBtnMenu(){
    const $label=document.createElement("label"),
     $input=document.createElement("input")

     $label.classList.add("nav_label")
     $label.for="menu";
    
     $input.classList.add("check__input");
     $input.type="checkbox";
     $input.name="check";
     $input.id="menu";

     $label.appendChild($input);

    return $label   
   }