let plusbtns = document.querySelectorAll(".question-btn")
plusbtns[0].addEventListener("click", Pb1)
plusbtns[1].addEventListener("click", Pb2)
plusbtns[2].addEventListener("click", Pb3)
let text = document.querySelectorAll(".question-text")
let minus = document.querySelectorAll(".minus-icon")
let plus = document.querySelectorAll(".plus-icon")
function Pb1() {
    text[0].style.display = "block"
    minus[0].style.display = "block"
    plus[0].style.display = "none"

    text[1].style.display = "none"
    minus[1].style.display = "none"
    plus[1].style.display = "block"

    text[2].style.display = "none"
    minus[2].style.display = "none"
    plus[2].style.display = "block"
}
function Pb2() {
    text[1].style.display = "block"
    minus[1].style.display = "block"
    plus[1].style.display = "none"

    text[0].style.display = "none"
    minus[0].style.display = "none"
    plus[0].style.display = "block"

    text[2].style.display = "none"
    minus[2].style.display = "none"
    plus[2].style.display = "block"

}
function Pb3() {
    text[2].style.display = "block"
    minus[2].style.display = "block"
    plus[2].style.display = "none"

    text[0].style.display = "none"
    minus[0].style.display = "none"
    plus[0].style.display = "block"

    text[1].style.display = "none"
    minus[1].style.display = "none"
    plus[1].style.display = "block"
}
