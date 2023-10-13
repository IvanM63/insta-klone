import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const RootReducers = combineReducers({});

export const store = createStore(RootReducers, applyMiddleware(thunk));
