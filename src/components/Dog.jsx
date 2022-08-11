import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Dog = () => {
    const dog = useSelector( state => state.dog );
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
    } = dog;
    return (
        <Container>
            <div className="card">
                <h4 className='title'>  {name}</h4>
                <img src={image} alt="Dog" className='image'/>
                <p className='description'>
                    <span className='black'>Temperamento: </span>
                    {temperament}
                <p><span className='black'>Height: </span>{height}</p>
                <p><span className='black'>Weight: </span>{weight}</p>
                <p><span className='black'>Bred for: </span>{bred_for}</p>
                <p><span className='black'>Breed group: </span>{breed_group}</p>
                <p><span className='black'>Life span: </span>{life_span}</p>
                <p><span className='black'>Origin: </span>{origin}</p>  
                </p>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em 1em;
        border-radius: 1em;
        background-color: rgba(241,192,201,0.85);
    }
    .description{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .black{
        font-weight: bold;
    }
`;