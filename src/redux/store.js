import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactFormReducer } from './contactFormReducer';

const rootReducer = combineReducers({
  contactForm: contactFormReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
