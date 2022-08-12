import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from "react-router-dom";
import { 
    // SET_POKEMON,
    // ERROR_POKEMON,
    SET_DOG,
    addToCards,
    ADD_TO_CARDS
 } from '../redux/actions';
import styled from 'styled-components';
import { 
    gray, btnColorText, 
    primaryColor,
    hoverColorBackground, hoverColorText
} from '../styles/colors';

export const Create = () => {
    // let history = useHistory();

    const [data, setData] = useState({});
    const [checked, setChecked] = useState({});
    // const [nextData, setNextData] = useState(false);
    const dispatch = useDispatch();

    // const handleNextData = () => {
    //     setNextData(!nextData);
    // };

    const checking = e => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    // const validate = (checked) => {
    //     let array = [];
    //     for ( const prop in checked )
    //         if ( checked[prop] )
    //             array.push(prop);
    //     return array;
    // }

    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const types = useSelector( state => state.types );
    const idApi = useSelector( state => state.cards.length );
    const submiting = e => {
        e.preventDefault();
        // console.log('Creando...');
        const toSend = {
            id: idApi+1,
            name: data.name,
            temperament: data.temperament,
            height: data.height,
            weight: data.weight,
            bred_for: data.bred_for,
            breed_group: data.breed_group,
            life_span: data.life_span,
            origin: data.origin
        }
        console.log(toSend);
        dispatch( { type: ADD_TO_CARDS, payload: toSend } );
        dispatch( { type: SET_DOG, payload: toSend } );
    }
    return (
        <Container>
            <Form>
                <LabelsAndInputs>
                    <h2>Create your DOG</h2>
                    <label htmlFor="name" className={``} >Name 
                        <input type="text" name="name" className={`inputData`} value={data['name']}
                        onChange={changing}/></label>

                    <label htmlFor="image" className={``} >Image 
                        <input type="text" name="image" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="temperament" className={``} >Temperament 
                        <input type="text" name="temperament" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="height" className={``} >Height 
                        <input type="text" name="height" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="weight" className={``} >Weight 
                        <input type="text" name="weight" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="bred_for" className={``} >Bred for
                        <input type="text" name="bred_for" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="breed_group" className={``} >Breed group 
                        <input type="text" name="breed_group" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="life_span" className={``} >Life span 
                        <input type="text" name="life_span" className={`inputData`}
                        onChange={changing}/></label>

                    <label htmlFor="origin" className={``} >Origin 
                        <input type="text" name="origin" className={`inputData`}
                        onChange={changing}/></label>

                    <ButtonCreate type="submit" onClick={submiting}>Create</ButtonCreate>
                </LabelsAndInputs>
            </Form>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

const Form = styled.form`
    margin-top: 5vh;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${primaryColor};
    border-radius: 0.5em;
`;

const LabelsAndInputs = styled.fieldset`
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 0.5em;
    border: none;
    label{
        display: flex;
        .inputData{
            border: none;
            border-radius: 0.2em;
            padding: 0;
            margin: 0.5em 2.0em;
            flex-shrink: 5;
        }
    }
`;

const ButtonCreate = styled.button`
    font-size: 1em;
    color: ${btnColorText};
    background-color: ${gray};
    border-radius: 1.2em;
    border: none;
    padding: 0.5em 1.2em;
    margin: 0.7em 2em;
    :hover{
        background-color: ${hoverColorBackground};
        color: ${hoverColorText}
    }
`;

const LabelItem = styled.label`
    margin: 0.1em 1em;
    input{
        margin-left: 0.5em;
    }
`;