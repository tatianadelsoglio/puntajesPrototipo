import React from 'react';
import './index.css';
import Seleccion from './componentes/seleccion';
import Seleccionado from './componentes/seleccionado';


function App() {
  return (
    <>
      <div className='contenedor'>
        <div className="contenedor_seleccion">

          <Seleccion />
          <Seleccionado/>

        </div>



        <div className='contenedor_circulos'>
        <div id='circulo1'></div>
        <div id='circulo2'></div>
        <div id='circulo3'></div>
        <div id='circulo4'></div>
        <div id='circulo5'></div>
        <div id='circulo6'></div>
        <div id='circulo7'></div>
        <div id='circulo8'></div>
        </div>
      </div>
    </>
  );
}

export default App;
