const {remote} = require('electron');
const jquery = require('jquery');

document.getElementById('exitb').addEventListener('click', closewin);
document.getElementById('minimizeb').addEventListener('click', miniwin);

var username = document.getElementById('username');
var password = document.getElementById('password');

function closewin() {
    var window = remote.getCurrentWindow();
    window.close();
}

function miniwin() {
    var window = remote.getCurrentWindow();
    window.minimize();
}
