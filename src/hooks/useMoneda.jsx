import {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    display: block;
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    fotn-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;

`;

const Select = styled.select`
    width: 100%;
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    boder: none;
`;

const useMoneda = (label, stateInicial, opcionesMonedas) => {
    //state del hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => {
        return (
        <Fragment>
            <Label>{label}</Label>
            <Select value={state} onChange={e => actualizarState(e.target.value)}>
                    <option value="">Seleccione</option>
                {opcionesMonedas.map (monedas => (
                    <option key={monedas.codigo} value={monedas.codigo}>{monedas.nombre}</option>
                ) )}
            </Select>
        </Fragment>
        )
    }
    //retornar el state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
};

export default useMoneda;