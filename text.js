let title = document.querySelector(".title"),
 ul = document.querySelector("ul"),
 reload = document.querySelector(".reload"),
 img = document.querySelector(".image-box"),
 errorInternet = document.querySelector(".error-internet");

window.onload = function(){
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

window.addEventListener("online" , function(){
    onLine();
});

window.addEventListener("offline" , function(){
    offLine();
});

reload.onclick = function(){
    window.location.reload();
}

function onLine (){
    title.innerHTML = "onLine Now";
    title.style.color = "green";
    img.classList.add("hide");
    ul.classList.add("hide");
    errorInternet.classList.add("hide")
    reload.classList.add("hide");
}

function offLine(){
    title.innerHTML = "No Internet";
    title.style.color = "#000";
    ul.classList.remove("hide");
    img.classList.remove("hide");
    errorInternet.classList.remove("hide")
    reload.classList.remove("hide");
}
