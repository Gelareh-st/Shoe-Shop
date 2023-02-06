document.getElementById("light-icon").onclick = function LightMode() {
    document.body.style.backgroundImage = "url('./assets/images/light.jpg')";
    document.getElementById("mobile-nav").style.backgroundImage = "url('./assets/images/light.jpg')";
    document.getElementById("light-icon").style.display = "none";
    document.getElementById("dark-icon").style.display = "block";

}
document.getElementById("dark-icon").onclick = function DarkMode() {
    document.body.style.backgroundImage = "url('./assets/images/dark.jpg')";
    document.getElementById("mobile-nav").style.backgroundImage = "url('./assets/images/dark.jpg')";
    document.getElementById("light-icon").style.display = "block";
    document.getElementById("dark-icon").style.display = "none";
}


document.getElementById("menu-icon").onclick = function OpenMenu() {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
}
document.getElementById("close-icon").onclick = function CloseMenu() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
}



var num = 0 , price=0;
for (let i = 0; i < document.getElementsByClassName("add-button").length; i++) {
    document.getElementsByClassName("add-button")[i].onclick = function () {
        num++;
        document.getElementById("counter").innerText = num;
    }

}