var keyText = document.getElementById("key");
var span = document.createElement("span");

var keycodeDiv = document.getElementById("keycodeDiv");
var keycode = document.getElementById("keycode");




span.style.color = "#5BBC7A";
span.style.padding = "10px";
document.addEventListener("keypress", (e) => {
    span.textContent = e.key;
    keyText.innerText = "You Pressed ";
    keyText.appendChild(span);

    keycodeDiv.classList.add("keycodeDiv");

    keycode.innerText = e.charCode;
    keycode.style.color = "#5BBC7A";
    keycode.style.padding = "0 15px";
    keycode.style.fontWeight = "bold";
    // console.log(span);

})