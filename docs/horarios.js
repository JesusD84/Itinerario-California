let lugares = sessionStorage.getItem('data');

lugares = JSON.parse(lugares);

let finTira = 
`
    </div>
</div>
`;

let lugaresSD = [];
let lugaresLA = [];
let lugaresSF = [];

lugares.forEach(lugar => {
    if(lugar.lugar == 'San Diego') {
        lugaresSD.push(lugar);
    }

    if(lugar.lugar == 'Los Angeles') {
        lugaresLA.push(lugar);
    }

    if(lugar.lugar == 'San Francisco') {
        lugaresSF.push(lugar);
    }
});

let nTiras = 2;
let tira = '';

do {
    let nombreTira = (nTiras % 2 == 0) ? `Dia ${nTiras / 2} - ` : `Dia ${(nTiras / 2)-0.5} - `;
    nombreTira += (nTiras % 2 == 0) ? `Mañana` : `Tarde`;
    tira += 
    `
    <div class="tiras">
        <div class="tituloTiras py-2 px-5">
           ${nombreTira}
        </div>
        <div class="d-flex flex-row flex-wrap mt-3 mb-4">
    `;

    let horas = 0;
    let horasManana = 4;
    let horasTarde = 14;
    let finTiraa = false;

    while(horas < 10) {
        
        if(nTiras % 2 == 0) {
            if(nTiras == 2 && horas == 0) {
                horas += 2;
                tira +=
                `
                <div class="bloque p-4 text-center mr-2" style="width: 19%;">
                    Camino del aeropuerto al hospedaje
                    <br><br>${horasManana}:00 - ${horasManana + 2}:00
                </div>
                `;
                horasManana += 2;
            }

            let i = []

            if(lugaresSD.length > 0) {

                lugaresSD.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                        if(!finTiraa) {
                            tira +=
                            `
                            <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                            Descanso / Comidas
                            <br><br>${horasManana}:00 - ${horasManana + (10-horas)}:00
                            </div>
                            `;
                            horas += (10 - horas);
                            horasManana += (10-horas);
                            finTiraa = true;
                        }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasManana}:00 - ${horasManana + sd.tiempo}:00
                        </div>
                        `;
                        horasManana += sd.tiempo;
                        lugaresSD.splice(index, 1);
                    }
                });

            } else if(lugaresLA.length > 0) {
                lugaresLA.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                        if(!finTiraa) {
                            tira +=
                            `
                            <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                            Descanso / Comidas
                            <br><br>${horasManana}:00 - ${horasManana + (10-horas)}:00
                            </div>
                            `;
                            horas += (10 - horas)
                            horasManana += (10-horas);
                            finTiraa = true;
                        }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasManana}:00 - ${horasManana + sd.tiempo}:00
                        </div>
                        `;
                        horasManana += sd.tiempo;
                        lugaresLA.splice(index, 1);
                    }
                });
            } else {
                lugaresSF.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                        if(!finTiraa) {
                            tira +=
                            `
                            <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                            Descanso / Comidas
                            <br><br>${horasManana}:00 - ${horasManana + (10-horas)}:00
                            </div>
                            `;
                            horas += (10 - horas)
                            horasManana += (10-horas);
                            finTiraa = true;
                        }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasManana}:00 - ${horasManana + sd.tiempo}:00
                        </div>
                        `;
                        horasManana += sd.tiempo;
                        lugaresSF.splice(index, 1);
                    }
                });
            
            }

            if(lugaresSD.length == 0 && lugaresLA.length == 0 && lugaresSF.length == 0 && horas < 10) {
                tira +=
                `
                <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                Descanso / Comidas
                <br><br>${horasManana}:00 - ${horasManana + (10-horas)}:00
                </div>
                `;
                horas += (10 - horas);
                horasManana += (10-horas)
                
            }

        } else {
            let i = []
           
            if(lugaresSD.length > 0) {

                lugaresSD.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                         if(!finTiraa) {
                             tira +=
                             `
                             <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                             Descanso / Comidas
                             <br><br>${horasTarde}:00 - ${horasTarde + (10-horas)}:00
                             </div>
                             `;
                             horas += (10 - horas)
                             horasTarde += (10-horas)
                            finTiraa = true;
                         }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasTarde}:00 - ${horasTarde + sd.tiempo}:00
                        </div>
                        `;
                        horasTarde += sd.tiempo;
                        lugaresSD.splice(index, 1);
                    }
                });

            } else if(lugaresLA.length > 0) {
                
                lugaresLA.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                         if(!finTiraa) {
                             tira +=
                             `
                             <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                             Descanso / Comidas
                             <br><br>${horasTarde}:00 - ${horasTarde + (10-horas)}:00
                             </div>
                             `;
                             horas += (10 - horas)
                             horasTarde += (10-horas);
                            finTiraa = true;
                         }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasTarde}:00 - ${horasTarde + sd.tiempo}:00
                        </div>
                        `;
                        horasTarde += sd.tiempo;
                        lugaresLA.splice(index, 1);
                    }
                });

                
            } else {
                lugaresSF.forEach((sd, index) => {
                    if(sd.tiempo > 10 - horas) {
                         if(!finTiraa) {
                             tira +=
                             `
                             <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                             Descanso / Comidas
                             <br><br>${horasTarde}:00 - ${horasTarde + (10-horas)}:00
                             </div>
                             `;
                             horas += (10 - horas)
                             horasTarde += (10-horas);
                            finTiraa = true;
                         }
                        
                    } else {
                        horas += sd.tiempo;
                        tira +=
                        `
                        <div class="bloque p-4 text-center mr-2" style="width: ${sd.tiempo * 10 - 1}%;">
                            ${sd.name}
                            <br><br>${horasTarde}:00 - ${horasTarde + sd.tiempo}:00
                        </div>
                        `;
                        horasTarde += sd.tiempo;
                        lugaresSF.splice(index, 1);
                    }
                });
            
            }

            if(lugaresSD.length == 0 && lugaresLA.length == 0 && lugaresSF.length == 0 && horas < 10) {
                tira +=
                `
                <div class="bloque p-4 text-center mr-2" style="width: ${((10-horas) * 10) - 1}%;">
                Descanso / Comidas
                <br><br>${horasTarde}:00 - ${horasTarde + (10-horas)}:00
                </div>
                `;
                horas += (10 - horas);
                horasTarde += (10-horas);
                
            }

        }
        console.log('bloque', horas);
        
    }

    tira += finTira;

    nTiras++;
    
} while (lugaresSD.length > 0 || lugaresLA.length > 0 || lugaresSF.length > 0);

document.getElementById('contenedor').innerHTML = tira;

let horarios = document.getElementsByClassName('boton')[0];

horarios.addEventListener('click', () => {
    window.location.href = 'lugaresHospedaje.html';
});
