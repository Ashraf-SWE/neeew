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
<button id="showEduBtn" class="show-btn" onclick="
  const edu=document.getElementById('eduInfo');
  const btn=this;
  if(edu.style.display==='block'){edu.style.display='none'; btn.textContent='Show Education';}
  else{edu.style.display='block'; btn.textContent='Hide Education';}
">Show Education</button>


