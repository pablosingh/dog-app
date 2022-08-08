import { LOAD_CARDS } from './actions';
const initialState = {
    cards: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            console.log("load");
            console.log(action.payload);
            return {
                ...state,
                cards: [...action.payload]
            };
    }
};