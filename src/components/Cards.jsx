import { useSelector } from 'react-redux';
import { Card } from './Card';
import styled from 'styled-components';

export const Cards = () => {
    const state = useSelector( state => state );
    return (
        <Container>
            { state && state.subCards.map( c => <Card dog={c} />) }
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;