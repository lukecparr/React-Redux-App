import { START_FETCHING, QUOTE_RETRIEVED, FETCH_FAILED } from '../actions';

const initialState = {
	quote: "Crying: acceptable at funerals and the Grand Canyon.",
	isFetching: false,
	error: ''
}


export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case START_FETCHING: {
			return {
				...state,
				isFetching: true,
				error: '',
				quote: ''
			}
		}
		case QUOTE_RETRIEVED: {
			return {
				...state,
				quote: action.payload,
				isFetching: false
			}
		}
		case FETCH_FAILED: {
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		}
		default:
			return state;
	};
};