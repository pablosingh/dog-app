import { useSelector } from 'react-redux';
import { Card } from './Card';

export const Cards = () => {
    const state = useSelector( state => state );
    return (
        <div>
            { state && state.cards.map( c => <Card dog={c} />) }
        </div>
    )
};