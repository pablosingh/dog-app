import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    loadSubCards,
    setActualPageCards, 
} from '../redux/actions';
import styled from 'styled-components';

export default function Paged() {
    const pagesCards = useSelector( state => state.subPagesCards);
    const actualPage = useSelector( state => state.actualPageCards);
    const maxPages = useSelector( state => state.maxPageCards);

    const dispatch = useDispatch();
    const next='>>', prev='<<';
    useEffect(() => {
        dispatch( loadSubCards());
    }, [actualPage]);

    return (
        <Container>
            <ContainerBtn>
                <button className={'btn'}
                onClick={()=> {
                    if ( actualPage>0 ){
                        dispatch( setActualPageCards(actualPage-1) );
                    }
                } }
                    >{prev}</button>

                { pagesCards && pagesCards.map( p => <button 
                    key={p}
                    className={`${'btn'} ${(p===actualPage) ? 'active' : ` `}`}
                    onClick={()=> {
                        dispatch( setActualPageCards(p) );
                    } }
                    >{p+1}</button>) }

                <button 
                    className={'btn'}
                    onClick={()=> {
                        if ( actualPage<maxPages ){
                            dispatch( setActualPageCards(actualPage+1) );
                        }
                    } }
                    >{next}</button>
            </ContainerBtn>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`;

const ContainerBtn = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .btn{
        color: black;
        background-color: rgba(1,120,152,255);
        border-radius: 0.2em;
        border: none;
        padding: 0.7em;
        margin: 1em 1em;
        font-size: 1em;
    }
    .btn:hover{
        background-color: rgb(50, 190, 224);
    }
    .active{
        background-color: rgba(215, 248, 246, 0.8);
        font-weight: bold;
    }
`;