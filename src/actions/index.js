import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const QUOTE_RETRIEVED = 'QUOTE_RETRIEVED';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getQuote = () => {
	return (dispatch) => {
		dispatch({type: START_FETCHING});
		axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
			.then((res) => {
				// console.log(res);
				dispatch({type: QUOTE_RETRIEVED, payload: res.data[0]})
			})
			.catch((err) => {
				console.log(err.message)
				dispatch({type: FETCH_FAILED, payload: err.message})
			})
	}
}