import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose,
	logger = createLogger({
		predicate: (getState, action) => {
			return process.env.REACT_APP_ENVIRONMENT === 'development';
		},
	});

export default function configureStore(initialState) {
	const enhancers = composeEnhancers(
		applyMiddleware(
			logger,
		),
	);

	const store = initialState
		? createStore(allReducers, initialState, enhancers)
		: createStore(allReducers, enhancers);

	return store;
}

export const appStore = configureStore();
