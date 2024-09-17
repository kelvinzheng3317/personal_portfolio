function changeStyle() {
    const styleSheet = document.getElementById('mainStyleSheet');
    let currStyle = styleSheet.getAttribute('href');
    (currStyle === './stylesheets/mountain.css') ? currStyle = './stylesheets/nature.css' : currStyle = './stylesheets/mountain.css';
    styleSheet.setAttribute('href', currStyle);
    localStorage.setItem('style', currStyle);
    console.log('button pressed');
}

let styleButton = document.getElementById('style-button');
styleButton.addEventListener('click', changeStyle);

window.onload = function() {
    let currStyle = localStorage.getItem('style') || './stylesheets/mountain.css';
    const styleSheet = document.getElementById('mainStyleSheet');
    styleSheet.setAttribute('href', currStyle);
}