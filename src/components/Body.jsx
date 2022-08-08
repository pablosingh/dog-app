
// import { NavBarPhone } from './NavBarPhone';
import styled from 'styled-components';

export const Body = () => {
    return (
        <ContainerBody>
            Body
        </ContainerBody>
    )
};

const ContainerBody = styled.div`
    background-color: rgba(127, 255, 212, 0.941);
    height: 100vh;
    margin-left: 15vw;
    @media(max-width: 768px){
        margin-left: 0vw;
        width: 100vw;
    }
    @media(min-width: 768px){
        margin-left: 15vw;
        width: 85vw;
    }
`;