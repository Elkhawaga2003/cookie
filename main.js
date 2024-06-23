let username = document.getElementById("uname");
let useremail = document.getElementById("uemail");
let frames = document.getElementById("bodys");
let msg = document.querySelector(".msg");
window.onload = function () {
    if (document.cookie.length != 0) {
        console.log("hello");
        let them = document.cookie.split("=");
        document.body.style.backgroundColor = them[1];
    }
}
function check1() {
    if (frames.value != "noframe") {
        document.cookie = "bgcolor=" + frames.value + ";" + "expires=Sunday,23 June 2024 1:00:00 UTC ;";
        document.body.style.backgroundColor = frames.value;
    }
}
function check2() {
    if (username.value === '' || useremail.value === '') {
        msg.innerHTML = "your submition is rejected";
    } else {
        document.cookie = "name=" + username.value + ";" + "expires=Sunday,23 June 2024 1:00:00 UTC ;";
        document.cookie = "email=" + useremail.value + ";" + "expires=Sunday,23 June 2024 1:00:00 UTC ;";
    }
}
function check3() {
    if (document.cookie.length != 0) {
        confirm(document.cookie);
    } else {
        confirm("no Cookies found");
    }
}
