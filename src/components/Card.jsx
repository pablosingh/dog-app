import styled from 'styled-components';
import { useEffect } from 'react';

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
    // let arreglo = [];
    // let uno = '';
    // useEffect( () => {
    //     if(temperament){
    //         arreglo = temperament.split(',');
    //         uno = arreglo[0];
    //     }
    //     console.log(uno)
    // }, [temperament] );
    return (
        <Container>
            <h4 className='title'>  {name}</h4>
            <img src={image} alt="Dog" className='image'/>
            <span className='description'>
                <p className='black'>Temperamento: </p>
                    {temperament}
                </span>
        </Container>
    )
};

const Container = styled.div`
    @media(max-width: 768px){
        width: 40vw;
    }
    @media(min-width: 768px){
        width: 20vw;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em 2em;
    padding: 1em;
    background-color: rgba(241,192,201,0.85);
    border-radius: 2em;
    .title{
        margin: 0em 0.5em 0em 0em;
        font-size: 1.3em;
    }
    .image{
        margin: 0.5em;
        border-radius: 1em;
        @media(max-width: 768px){
            width: 40vw;
        }
        @media(min-width: 768px){
            width: 10vw; 
        }
    }
    .description{
        margin: 0.5em;
        .black{
            font-weight: bold;
        }
    }
`;