import {createStore} from 'redux';
import {connect} from 'react-redux';

const RESET_BEERS = 'RESET_BEERS';
const ADD_BEER = 'ADD_BEER';

const initialState = {beers: []};

function rootReducer(state=initialState, action) {
	switch (action.type) {
		case RESET_BEERS:
			return resetBeersReducer(state, action);
		case ADD_BEER:
			return addBeerReducer(state, action);
		default:
			return state;
	}
}

function resetBeersReducer(state, action) {
	return {beers: action.beers};
}

function addBeerReducer(state, action) {
	const newState = {beers: JSON.parse(JSON.stringify(state.beers))};
	newState.beers.push(action.beer);
	return newState;
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function mapStateToProps(state) {
	return {
		beers: state.beers
	};
}

function mapDispatchToProps(dispatch) {
	return {
		resetBeers: beers => dispatch({type: RESET_BEERS, beers}),
		addBeer: beer => dispatch({type: ADD_BEER, beer})
	};
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export {
	connector,
	store,
	rootReducer
};
