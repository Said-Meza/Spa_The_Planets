export function MainTextLink1(){
        const $a=document.createElement("a")
        const $spam1=document.createElement("spam")
        const $spam2=document.createElement("spam")

        $a.classList.add("main__texts__sources")
        $a.href="https://en.wikipedia.org/wiki/Earth"
        $a.id="wiki"
        $a.textContent="Source: "
        $a.target="_blank"

        $spam1.classList.add("spam__wiki")
        $spam1.textContent=" wikipedia"

        $spam2.textContent="🔽";

        $a.appendChild($spam1)
        $a.appendChild($spam2)


    return $a
}