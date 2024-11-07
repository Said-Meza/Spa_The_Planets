export function HeaderLogo(){
    const $logo=document.createElement("div")
    const $text=document.createElement("h4")

    $logo.classList.add("header__nav__logo")
    $text.classList.add("header__nav__txt")

    $text.textContent="the planets";

    $logo.appendChild($text)



 return $logo   
}