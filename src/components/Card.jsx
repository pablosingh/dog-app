import styled from 'styled-components';
import { searchDog } from '../redux/actions';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

export const Card = props => {
    const dispatch = useDispatch();
    const { 
        id,
        name,
        temperament,
        image
    } = props.dog;
    return (
        <Container>
            <Link to="/search" 
                className='linkDog'
                onClick={ () => {
                    dispatch(searchDog(id));
                }}>
                <h4 className='title'>  {name}</h4>
                <img src={image} alt="Dog" className='image'/>
                <span className='description'>
                    <p className='black'>Temperamento: </p>
                        {temperament}
                    </span>
            </Link>
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
    margin: 1em 2em;
    padding: 1em;
    background-color: rgba(241,192,201,0.85);
    border-radius: 2em;
    .linkDog{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
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
    }
`;