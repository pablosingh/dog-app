import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Head = () => {
    return (
        <Container>
            <div className={'navBar'}>
                <Link className='linkNavBar' to="/"
                    >Home
                </Link>
                <Link className='linkNavBar' to="/create"
                    >Create
                </Link>
                <Link className='linkNavBar' to="/about"
                    >About
                </Link>
                <Link className='linkNavBar' to="/search"
                    >Search
                </Link>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 15vw;
    height: 100vh;
    margin: 0;
    padding: 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    background-color: #3a4d54;
    @media(max-width: 768px){
        display: none;
    }
    .navBar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .linkNavBar{
            color: white;
            margin: 0.5em;
            padding: 0.5em 1em;
            border-radius: 1em;
            text-decoration: none;
        }
        .linkNavBar:hover{
            color: #3a4d54;
            background-color: white;
        }
    }
`;