const showEduBtn = document.getElementById("showEduBtn");
const eduInfo = document.getElementById("eduInfo");

showEduBtn.addEventListener("click", () => {
    if (eduInfo.style.display === "flex" || eduInfo.style.display === "block") {
        eduInfo.style.display = "none";
        showEduBtn.textContent = "Show Education";
    } else {
        eduInfo.style.display = "block";
        showEduBtn.textContent = "Hide Education";
    }
});

