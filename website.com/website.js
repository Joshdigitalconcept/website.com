const dropdown = document.getElementById('header2_first')
const caret = document.getElementById('fa-caret-down')

function header2_show(){
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none"
    
    /* caret.className = (caret.className === "fa-solid fa-caret-down") ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down" */
    caret.classList.toggle("fa-caret-up")
    caret.classList.toggle("fa-caret-down")
}
