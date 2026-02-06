function openDropContent() {
   document.getElementById("drop-content").classList.toggle("showDropContent");
}

window.onclick = function(event) {
    if(!event.target.matches(".dropbtn1")) {
        let dropContents = document.getElementsByClassName("dropdown-content1");
        console.log(dropContents);
        console.log("ath");
        for(let i = 0; i < dropContents.length; i++) {
              console.log("athhhhhhh");
            let openDropdown = dropContents[i];
            if(openDropdown.classList.contains("showDropContent")) {
                   console.log("working");
               openDropdown.classList.remove("showDropContent");
            }
        }
    }
}

let imgSlideIndex = 1;
showSlides(imgSlideIndex);

function showSlides(index) {
    let imgSlides = document.getElementsByClassName("slides");
    if(index > imgSlides.length) {
        imgSlideIndex = 1;
    }
    if(index < 1) {
        imgSlideIndex = imgSlides.length;
    }
    for(let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].style.display = "none";
    }
    imgSlides[imgSlideIndex - 1].style.display = "block";
}
function pnSlides(index) {
    showSlides(imgSlideIndex += index);
}


