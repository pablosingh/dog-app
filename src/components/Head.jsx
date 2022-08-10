import { Link } from 'react-router-dom';
import { 
    loadCards, 
    loadSubCards, 
    loadPagesCards,
    setActualPageCards
 } from "../redux/actions";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Filters from "./Filters";

export const Head = () => {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( loadCards() );
    }, [] );
    useEffect( () => {
        dispatch( loadSubCards() );
        dispatch( loadPagesCards() );
        dispatch( setActualPageCards(0) );
    }, [state.cards] );
    return (
        <Container>
            <div className={'navBar'}>
                <Link className='linkNavBar' to="/">Home</Link>
                <Link className='linkNavBar' to="/create" >Create</Link>
                <Link className='linkNavBar' to="/about" >About</Link>
                <Link className='linkNavBar' to="/search">Search </Link>
            </div>
            <div>
                <Filters/>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 10vw;
    height: 100vh;
    margin: 0;
    padding: 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    background-color: rgba(103,104,107,255);
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