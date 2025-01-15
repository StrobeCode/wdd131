document.getElementById('theme').addEventListener("change", changeTheme);

function changeTheme() {
const selectedTheme = document.getElementById('theme').value;
const bodyElement = document.body;
const logoImage = document.querySelector('.logo');

if (selectedTheme === 'dark') {
    bodyElement.classList.add('dark');
    logoImage.src = 'img/byui-logo_white.png';
}

else {
    bodyElement.classList.remove('dark');
    logoImage.src = 'img/byui-logo_blue.webp';
}

}