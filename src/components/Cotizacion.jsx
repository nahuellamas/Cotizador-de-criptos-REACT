import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ImgCripto = styled.img`
    width: 120px;
    margin: 0 20px;
    border-radius:100%;
    margin-top: 1rem;
`;

const Titulo = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    color: #fff;
    font-weight: 300;
    font-family: 'Bebas Neue', cursive;
`;

const Info = styled.p`
    font-size: 1.5rem;
    font-weight: 200;
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    margin: 0.5rem 0;
    span {
        font-weight: bold;
        letter-spacing: 2px;
        color: #9497FF;
    }
`;

const Cotizacion = ({resultado, criptomoneda, moneda}) => {
    if(Object.keys(resultado).length === 0) return null; //si el objeto viene vacio no retorna nada
    return ( 
        <Container>
            <Wrapper>
                <Titulo>{criptomoneda} - {moneda}</Titulo>
                <ImgCripto src={`https://www.cryptocompare.com/${resultado.IMAGEURL}`} alt={`Imagen de ${criptomoneda}`}/>
            </Wrapper>
            <Info>Precio: <span>{resultado.PRICE}</span></Info>
            <Info>Hoy abrio a: <span>{resultado.OPENDAY}</span></Info>
            <Info>Precio Maximo del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio Minimo del día: <span>{resultado.LOWDAY}</span></Info>
        </Container>
     );
}
 
export default Cotizacion;