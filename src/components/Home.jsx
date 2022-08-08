import { loadCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { Cards } from './Cards';

export const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector( state => state);
    return (
        <div>
            Home
            <button onClick={ () => dispatch( loadCards() )}>
                loadCards
            </button>
            <button onClick={ () => console.log(state) } >Estado</button>
            <div>
                <Cards/>
            </div>
        </div>
    )
};