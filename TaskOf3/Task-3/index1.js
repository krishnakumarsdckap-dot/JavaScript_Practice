let btns = document.querySelectorAll(".tab-btn")
let content=document.querySelectorAll(".content")
btns[0].addEventListener("click", btn1)
function btn1() {
    content[0].style.display = "block"
    content[1].style.display = "none"
    content[2].style.display = "none"
}
btns[1].addEventListener("click", btn2)
function btn2() {
    content[0].style.display = "none"
    content[1].style.display = "block"
    content[2].style.display = "none"
}
btns[2].addEventListener("click", btn3)
function btn3() {
    content[0].style.display = "none"
    content[1].style.display = "none"
    content[2].style.display = "block"
}