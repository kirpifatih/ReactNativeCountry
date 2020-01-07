import { createStore, applyMiddleWare } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
const middlewareList = [];
if (process.env.NODE_ENV === 'development') {
    middlewareList.push(createLogger());
}
const str = createStore(reducers, applyMiddleWare(...middlewareList));
export const store = str;