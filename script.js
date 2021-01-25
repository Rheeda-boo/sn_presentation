var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var button = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

button.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


var newModal = document.getElementById("newModal");
var newbtn = document.getElementById("newBtn");
var newbutton = document.getElementsByClassName("newclose")[0];

newbtn.onclick = function () {
    newModal.style.display = "block";
};

newbutton.onclick = function () {
    newModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == newModal) {
        newModal.style.display = "none";
    }
};
 