import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import Error from '../components/Error';

const Formulario = styled.form`
    width: 100%;
`;

const Button = styled.button`
    margin-top: 20px;
    font-size: 20px;
    background-color: #66a2fe;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    border: none;
    width:100%;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #326AC0;
        color: white;
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`;

const Form = ({guardarCriptomoneda, guardarMoneda}) => {
    const [listaCriptos, actualizarListaCriptos] = useState([]);
    const [error, actualizarError] = useState(false);
    //utilizar el custom hook
    
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'BRL', nombre: 'Real' },
        { codigo: 'CAD', nombre: 'Dolar Canadiense' },
    ]

    useEffect(() => {
        const consultarAPI = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(URL);
            actualizarListaCriptos(resultado.data.Data);
        }
        consultarAPI();
    }, []);
    //cuando se toma el boton submit
    const cotizarCripto = e => {
        e.preventDefault();
        //validamos
        if (moneda === '' || cripto === '') {
            actualizarError(true);
            return;
        }
        actualizarError(false);
        //pasar los datos al componente principal APP.JS
        guardarMoneda(moneda);
        guardarCriptomoneda(cripto);
    };

    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);
    const [cripto, SelectCripto] = useCripto('Elige tu Criptomoneda', '', listaCriptos);

    return ( 
        <Formulario onSubmit={cotizarCripto}>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMoneda />
            <SelectCripto />
           <Button type="submit" value="calcular">COTIZAR</Button>
        </Formulario>
     );
}
 
export default Form;