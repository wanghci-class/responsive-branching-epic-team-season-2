let navElement = document.querySelector("main-nav");
let body = document.querySelector("body");
let defaultTheme = document.querySelector("#defaultMode");
let lightTheme = document.querySelector("#lightMode");
let darkTheme = document.querySelector("#darkMode");

defaultTheme.addEventListener("click", function (event) {

    if (body.classList.contains("light") || body.classList.contains("dark")) {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
        }
        else {
            body.classList.remove("light");
        }
    }
    event.preventDefault();
});

lightTheme.addEventListener("click", function (event) {

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
    body.classList.add("light");
    event.preventDefault();
});

darkTheme.addEventListener("click", function (event) {

    if (body.classList.contains("light")) {
        body.classList.remove("light");
    }
    body.classList.add("dark");
    event.preventDefault();
});