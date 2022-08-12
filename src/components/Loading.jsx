import { useSelector } from 'react-redux';
import image from '../image/pug_load.gif';
import styled from 'styled-components';

export const Loading = () => {
    const state = useSelector( state => state );
    return (
        <Container>
            <h2>Loading ...</h2>
            <img src={image} alt="Loading" className="image" />
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0em 1em;
    padding: 2em 2em;
    .image{
        border-radius: 1em;
        padding: 0.5em 0.5em;
        @media(max-width: 768px){
            width: 90%;
        }
        @media(min-width: 768px){
            width: 50%;
        }
    }
`;