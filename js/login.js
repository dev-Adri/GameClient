const jq = require('jquery');
const rm = require('electron').remote;

const Username = $('#username').text();
const Password = $('#password').text();

document.getElementById('username').addEventListener('click', usernamefn);


function usernamefn() {
    alert(Username);
}