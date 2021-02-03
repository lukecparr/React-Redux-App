import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { getQuote } from '../actions';

import './Quotes.css';


	const Quotes = (props) => {
		const [copyButtonText, setCopyButtonText] = useState('Copy to clipboard')
		
		const onClickHandler = (e) => {
			e.preventDefault();
			props.getQuote();
		}

		const copyHandler = (e) => {
			e.preventDefault();
			var dummy = document.createElement("input");
			document.body.appendChild(dummy);
			dummy.setAttribute('value', props.quote);
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			setCopyButtonText('Copied!')
			setTimeout(() => setCopyButtonText('Copy to clipboard'), 2000)
		}

		return (
		<div className="quote-container">
		{ props.isFetching ? <h2>Fetching...</h2>
		: props.quote      ? <h3>"{props.quote}"</h3>
		: props.error      ? <h2 style={{color: "red"}}>{props.error}<br></br>Please try again</h2>
		: ''
		}
		<Button color="primary" onClick={onClickHandler}>Get quote</Button>
		<Button color="primary" onClick={copyHandler}>{copyButtonText}</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		quote: state.quote,
		isFetching: state.isFetching,
		error: state.error
	}
}

export default connect(mapStateToProps, { getQuote })(Quotes);