window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#f4eee2";
        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.style.zIndex = "1000";
    }

});