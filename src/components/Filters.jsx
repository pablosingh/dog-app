import React, { useState } from 'react';
import { 
    orderByNameAsc,
    orderByNameDes,
    orderByWeightAsc,
    orderByWeightDes,
    loadCards
} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Filters() {
    const dispatch = useDispatch();

    const handleSort = e => {
        console.log( 'handleSort');
        console.log( e.target.value );
        switch ( e.target.value ) {
            case 'asc': dispatch( orderByNameAsc() );break;
            case 'desc': dispatch( orderByNameDes() );break;
            case 'ascW': dispatch( orderByWeightAsc() );break;
            case 'descW': dispatch( orderByWeightDes() );break;
            default: ;break;
        }
    };

    return (
        <Container>
            <div className="card">
                <h4 className={'title'}>Order</h4>
                <select className={'select'} onChange={ e => handleSort(e) }>
                    <option value="" disabled selected>
                        Alphabetical
                    </option>
                    <option value="asc" className='opt'>A-Z</option>
                    <option value="desc" className='opt'>Z-A</option>
                </select>
                <select className={'select'} onChange={ e => handleSort(e) }>
                    <option value="" disabled selected>
                        Weight
                    </option>
                    <option value="ascW" className='opt'>Ascending</option>
                    <option value="descW" className='opt'>Descending</option>
                </select>
                <button className={'btn'} onClick={()=> dispatch( loadCards() )}>Reset</button>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    padding: 1.5em 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media(min-width: 768px){
            width: 100%;
        }
        @media(max-width: 768px){
            width: 50%;
        }
        .title{
            padding-bottom: 0.9em;
            color: white;
        }
        .select{
            width: 80%;
            border-radius: 0.5em;
            margin: 0.5em;
            padding: 0em 0.5em;
            .opt{
                color: white;
                background-color: rgba(179,112,115,255);
                padding: 0em 0.5em;
            }
            .opt:hover{
                color: #3a4d54;
                background-color: white;
            }
        }
        .btn{
            color: white;
            margin: 0.5em 0em;
            padding: 0.5em 1.3em;
            background-color: rgba(103,104,107,255);
            border-radius: 1.2em;
            border: none;
        }
        .btn:hover{
            color: #3a4d54;
            background-color: white;
        }
    }
`;