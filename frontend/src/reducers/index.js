import { combineReducers } from 'redux';

import conversationReducer from './conversationReducer';

export default combineReducers({ conversation: conversationReducer });
