sessionStorage.clear();

let lugaresInteres = [];

let bloques = document.getElementsByClassName("bloque");

for(let bloque of bloques) {
    bloque.addEventListener('click', () => {
        let name = bloque.getElementsByClassName('tituloLugar')[0].innerHTML;

        let costo = bloque.getElementsByTagName('p')[0].innerHTML;
        costo = costo.replace('<strong>Costo:</strong> ','');
        costo = costo.replace('$','');
        costo = (costo === 'Gratis') ? 0 : Number(costo);

        let tiempo = bloque.getElementsByTagName('p')[1].innerHTML;
        tiempo = tiempo.replace('<strong>Tiempo:</strong> ','');
        tiempo = tiempo.replace(' horas','');
        tiempo = tiempo.replace(' hora','');
        tiempo = Number(tiempo);

        let lugar = bloque.getElementsByTagName('p')[2].innerHTML;
        lugar = lugar.replace('<strong>Lugar:</strong> ','');

        let lugarInteres = {
            name, costo, tiempo, lugar
        }

        if(lugaresInteres.length > 0) {
            let is = false;
            lugaresInteres.forEach((interes, index) => {
                if(JSON.stringify(lugarInteres) === JSON.stringify(interes) ) {
                    lugaresInteres.splice(index, 1);
                    is = true;
                }
            });
            if(!is) {
                lugaresInteres.push(lugarInteres);
            }
        } else {
            lugaresInteres.push(lugarInteres);
        }

        for(let bloque of bloques) {
            let name = bloque.getElementsByClassName('tituloLugar')[0].innerHTML;
            let indicador = bloque.getElementsByClassName('indicador')[0];

            indicador.innerHTML =  '';
            indicador.style.background = 'white';
            
            lugaresInteres.forEach((lugar, index) => {
                if(name === lugar.name) {
                    indicador.innerHTML = index + 1;
                    indicador.style.background = '#007BFF';
                }
            });

        }
    });
}

let listo = document.getElementById('boton');
listo.addEventListener('click', () => {
    let data = JSON.stringify(lugaresInteres);

    sessionStorage.setItem('data', data);

    window.location.href = 'lugaresHospedaje.html';
});
