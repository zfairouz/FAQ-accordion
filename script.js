const accordionBtn = document.querySelectorAll(".accordion-btn");

for (let i = 0; i < accordionBtn.length; i++) {
    const item = accordionBtn[i];
    item.addEventListener("click", function() {
        this.classList.toggle("active")
        const itemDescription = this.nextElementSibling;
        const plusIcon = this.querySelector(".plus-icon")
        const minusIcon = this.querySelector(".minus-icon")
        const colorch = this.querySelector(".accordio-description");
        

        if(itemDescription.style.maxHeight){
            itemDescription.style.maxHeight = null;
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
            this.querySelector(".accordion-btn p").style.color = "black";
            
        }else{
            itemDescription.style.maxHeight = itemDescription.scrollHeight + "px";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
            this.querySelector(".accordion-btn p").style.color = "none";
            
        }
    })
}
