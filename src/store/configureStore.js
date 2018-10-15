import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk'
import { appReducer } from './appReducer';
import optimizelyReducer from './optimizelyReducer'

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);

const rootReducer = combineReducers({
    appReducer,
    optimizelyReducer
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
