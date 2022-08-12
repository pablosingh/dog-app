import { loadCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { Cards } from './Cards';
import { Loading } from './Loading';
import Paged from './Paged';

export const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector( state => state);
    return (
        <div>
            { 
                state.loading ? <Loading/>
                    : <>
                        <Paged/>
                        <Cards/>
                    </>
                    }
        </div>
    )
};