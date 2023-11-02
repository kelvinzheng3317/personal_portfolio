function changeStyle() {
    const styleSheet = document.getElementById('mainStyleSheet');
    let currStyle = styleSheet.getAttribute('href');
    (currStyle === 'mountain.css') ? currStyle = 'nature.css' : currStyle = 'mountain.css';
    styleSheet.setAttribute('href', currStyle);
    localStorage.setItem('style', currStyle);
    console.log('button pressed');
}

let styleButton = document.getElementById('style-button');
styleButton.addEventListener('click', changeStyle);

window.onload = function() {
    let currStyle = localStorage.getItem('style') || 'mountain.css';
    const styleSheet = document.getElementById('mainStyleSheet');
    styleSheet.setAttribute('href', currStyle);
}