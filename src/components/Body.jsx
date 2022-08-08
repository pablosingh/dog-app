import { Routes, Route } from 'react-router-dom';
import { NavBarPhone } from './NavBarPhone';
import { Home } from './Home';
import { Create } from './Create';
import { About } from './About';
import { Search } from './Search';
import styled from 'styled-components';

export const Body = () => {
    return (
        <ContainerBody>
            <NavBarPhone/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/search" element={<Search/>}/>
            </Routes>
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