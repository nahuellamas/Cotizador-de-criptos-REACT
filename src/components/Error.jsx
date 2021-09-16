import styled from '@emotion/styled';

const ErrorP = styled.p`
    background-color: #b7322c;
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    padding: 1rem;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 5px;
    text-align: center;
`;


const Error = ({mensaje}) => {
    return ( 
        <ErrorP>{mensaje}</ErrorP>
     );
}
 
export default Error;