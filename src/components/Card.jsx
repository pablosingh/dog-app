import styled from 'styled-components';

export const Card = props => {
    const { 
        id,
        name,
        height,
        weight,
        bred_for,
        breed_group,
        life_span,
        temperament,
        origin, 
        image
    } = props.dog;
    return (
        <Container>
            <span>Name: {name} Id: {id}</span>
            <img src={image} alt="Dog" className='image'/>
            <span>Temperamento: {temperament}</span>
        </Container>
    )
};

const Container = styled.div`
    width: 25vw;
    margin: 1em;
    padding: 1em;
    background-color: rgb(34, 150, 228);
    border-radius: 2em;
    .image{
        width: 20vw;
    }
`;