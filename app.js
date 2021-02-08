const wonders = document.querySelectorAll(".wonder");

wonders.forEach(wonder => {
    wonder.addEventListener("click", function () {
        if (document.querySelector(".selected")) {
            document.querySelector(".selected").classList.remove("selected");
        }
        wonder.classList.add("selected");
        console.log(document.querySelectorAll(".container div"));
    })
});