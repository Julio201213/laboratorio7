
'use strict';


const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');
const agregarDiv = document.getElementById('principal');

let panelResultado;
let valorDivisa = 0;
let tipoUsa = 3491.21;
let tipoMxn = 175.708;
let tipoCop = 1;
let tipoVes = 0.00292;
let tipoEur = 4228.16;
let oper = 0;


const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();
const fragmento3 = document.createDocumentFragment();


function resolverDivisa(monedaOrigen,monedaDestino) 
{

     let cantidadDinero = document.getElementById('cantidad').value;
     let tempoOrigen = monedaOrigen;
     let tempoDestino = monedaDestino;
     let listaMonedaOrig = operMoneda(tempoOrigen);
     let listaMonedaDest = operMoneda(tempoDestino);


     if (listaMonedaOrig == listaMonedaDest) 
     {
          oper = cantidadDinero;
          panelResultado = document.getElementById('resultado').innerHTML = ('su conversion es de: $' + operacion);
          document.getElementById("resultado").style.display = "block";

          setTimeout(function() {
               document.querySelector('#resultado').remove();
               formulario.reset();
          }, 10000);
     }
     else 
     {
          oper = (cantidadDinero * (listaMonedaOrig / listaMonedaDest));
          panelResultado = document.getElementById('resultado').innerHTML=('su conversion es de: $' + oper.toFixed(5));
          document.getElementById('resultado').style.display = 'block';

          setTimeout(function() {
               document.querySelector('#resultado').remove();
               formulario.reset();
          }, 10000);
     }


}

     function operMoneda(tempo) 
     {
          switch(tempo) 
          {
               case '1':
                    valorDivisa = tipoUsa;
                    break;
               case '2':
                    valorDivisa = tipoMxn;
                    break;
               case '3':
                    valorDivisa = tipoCop;
                    break;
               case '4':
                    valorDivisa = tipoEur;
                    break;
               case '5':
                    valorDivisa = tipoVes;
                    break;
          }
          return valorDivisa;
     }


     //Vector Moneda
     var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];
     
     //Vector Moneda destino
     var cambio = ['Moneda de Cambio', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];

     moneda.forEach((data, index) => {
          const item = document.createElement('option');
          item.setAttribute('value', index)
          item.textContent = data;
          fragmento.appendChild(item);
     })

     listaMoneda.appendChild(fragmento);
     
     cambio.forEach((data, index)=>{
          const item = document.createElement('option');
          item.setAttribute('value', index)
          item.textContent = data;
          fragmento2.appendChild(item);    
         
     })

     listaCambio.appendChild(fragmento2);

     const divNew = document.createElement('div');

     divNew.setAttribute('id', 'resultado');
     divNew.classList.add('new');
     fragmento3.appendChild(divNew);
     agregarDiv.appendChild(fragmento3);


     formulario.addEventListener('submit', (e) => {
          e.preventDefault();
     
          // leer la moneda seleccionada
          const monedaSelect = document.getElementById('moneda');
          const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


          // leer la criptomoneda seleccionada
          const criptoMonedaSelect = document.getElementById('criptomoneda');
          const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

          const divMensaje = document.createElement('div');
          divMensaje.classList.add('text-center', 'alert');


          // comprobar que ambos campos tengan algo seleccionado
          if (monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
               divMensaje.classList.add('alert-danger');
               divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
               alerta.appendChild(divMensaje)
          } else {
               divMensaje.classList.add('alert-success');
               divMensaje.appendChild(document.createTextNode('Gracias'));
               alerta.appendChild(divMensaje)
          }

          setTimeout(function() {
              document.querySelector('#principal .alert').remove();
              formulario.reset();
          }, 3000);
          
          switch (criptoMonedaSeleccionada) 
          {
               case '1':
                    resolverDivisa(monedaSeleccionada, criptoMonedaSeleccionada);
                    break;
               case '2':
                    resolverDivisa(monedaSeleccionada, criptoMonedaSeleccionada);
                    break;
               case '3':
                    resolverDivisa(monedaSeleccionada, criptoMonedaSeleccionada);
                    break;
               case '4':
                    resolverDivisa(monedaSeleccionada, criptoMonedaSeleccionada);
                    break;
               case '5':
                    resolverDivisa(monedaSeleccionada, criptoMonedaSeleccionada);
                    break;

                     default:
                         console.log('ingresa valores validos');
          }

     })
