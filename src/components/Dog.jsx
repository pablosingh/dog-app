import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { primaryColor } from '../styles/colors';
import errorImage from '../image/not_found.jpg';

export const Dog = () => {
    const dog = useSelector( state => state.dog );
    return (
        <Container>
            { dog ? 
                <div className="card">
                    <h4 className='title'>  {dog.name} | Id: {dog.id}</h4>
                    <img src={dog.image} alt="Dog" className='image'/>
                    <p className='description'>
                        <span className='black'>Temperamento: </span>
                        {dog.temperament}
                    <p><span className='black'>Height: </span>{dog.height}</p>
                    <p><span className='black'>Weight: </span>{dog.weight}</p>
                    <p><span className='black'>Bred for: </span>{dog.bred_for}</p>
                    <p><span className='black'>Breed group: </span>{dog.breed_group}</p>
                    <p><span className='black'>Life span: </span>{dog.life_span}</p>
                    <p><span className='black'>Origin: </span>{dog.origin}</p>  
                    </p>
                </div>
            : <NotFound>
                <h2>Dog Not Found</h2>
                <img src={errorImage} alt='Error Dog Not Found' className='image'/>
            </NotFound>}
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

const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
    background-color: ${primaryColor};
    padding: 1em 1em;
    margin: 2em 1em;
    .iamge{
        width: 10%;
        border-radius: 1em;
    }
`;
