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

