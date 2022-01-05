const css = document.getElementById("theme");
document.querySelectorAll(".color-pallete").forEach(item => {
    item.addEventListener("click", event => {
        themeId = item.getAttribute("data-themeId");
        css.setAttribute("href", "css/pallete-" + themeId + ".css");
    });
});
