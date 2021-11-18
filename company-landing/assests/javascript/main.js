// Portfilio gallery item filter
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
  
    })
}



// Mobile Menu

const menuIcon = document.querySelector('#menu-icon')
const headerMenu = document.querySelector('#header-menu')
const closeIcon = document.querySelector('#close-icon')

menuIcon.onclick = e =>{
    headerMenu.style.transform = 'translateX(0%)'
}

closeIcon.onclick = e => {
    headerMenu.style.transform = 'translateX(100%)'
}