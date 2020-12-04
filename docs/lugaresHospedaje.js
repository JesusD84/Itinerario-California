let lugares = sessionStorage.getItem('data');

lugares = JSON.parse(lugares);

costo = 0;

lugares.forEach(lugar => {
    if(lugar.lugar === 'San Diego') {
        document.getElementsByClassName('bloque')[0].style.display = 'block';
    }
    if(lugar.lugar === 'Los Angeles') {
        document.getElementsByClassName('bloque')[1].style.display = 'block';
    }
    if(lugar.lugar === 'San Francisco') {
        document.getElementsByClassName('bloque')[2].style.display = 'block';
    }
});

let horarios = document.getElementsByClassName('boton')[0];

horarios.addEventListener('click', () => {
    window.location.href = 'horarios.html';
});