import React from 'react';
import { connect } from 'react-redux';

	//Set up fetch button and event handler
	//Set up actions, middleware, and API call

const Quotes = (props) => {
	return (
		<>
		<h2>"{props.quote}"</h2>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		quote: state.quote
	}
}

export default connect(mapStateToProps)(Quotes);