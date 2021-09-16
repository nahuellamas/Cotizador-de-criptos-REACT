import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagenCripto from './cryptomonedas.png';
import Form from './components/Form';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Wrapp = styled.div`
  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Imgcripto = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  @media (max-width: 600px) {
    max-width: 70%;
    margin-top: 1rem;
  }
`;
 
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 1.5rem;
  margin-top: 1rem;

  &::after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: #66A2FE;
    display: block;
    border-radius: 20px;
  }
  @media (max-width: 550px) {
    font-size: 40px;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [cargando, actualizarCargando] = useState(false);
  const [resultado, guardarResultado] = useState({});

  //para que se fije si cambio el state de moneda y criptomoneda
  useEffect(() => {
    const cotizacion = async () => {
      if(moneda === '') return; //no se ejecuta si no hay nada en el state
      if(criptomoneda === '') return; //no se ejecuta si no hay nada en el state
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(URL);
      actualizarCargando(true);
      setTimeout(() => {
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        actualizarCargando(false);
      }, 2500);
    }
    cotizacion();
  } , [criptomoneda, moneda]);
  
  
  return (
    <Contenedor>
      <Wrapp>
        <Imgcripto src={imagenCripto} alt="imagen cripto" />
      </Wrapp>
      <Wrapp>
        <Heading>Cotizador de Criptomenedas</Heading>
        <Form 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {cargando ? <Spinner /> : <Cotizacion resultado={resultado} moneda={moneda} criptomoneda={criptomoneda}/> }
      </Wrapp>
    </Contenedor>
  );
}

export default App;
