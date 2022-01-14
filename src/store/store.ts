import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(middleware));
    }
    return applyMiddleware(...middleware);
}

const reducer = (state, action) => {
    if (action.type == HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    } else {
        return reducers(state, action);
    }
}

const initializeStore = () => {
    return createStore(reducer, bindMiddleware(thunkMiddleware));
}

export const wrapper = createWrapper(initializeStore);