let btnDropDown = document.getElementsByClassName ("btn-drop-down")[0]
let btnClose = document.getElementsByClassName ("btn-close")[0]
let hiddenCart = document.getElementsByClassName ("l-cart")[0]
let overlay = document.getElementsByClassName ("overlay")[0]

btnDropDown.addEventListener ("click", function () {
    hiddenCart.style.display = "flex"
    overlay.style.display = "flex"
})

btnClose.addEventListener ("click", function () {
    hiddenCart.style.display = "none"
    overlay.style.display = "none"
})
