import AppDispatcher from '../dispatcher/dispatcher';
import ActionTypes from '../actions/actionTypes';
import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

export default class ListView extends ReduceStore {
	getInitialState() {
		return Immutable.Map({
				  isLoading: false,
				  content: {},
				  error: false
				});
	}
	reduce( state , action ) {
		let type = action.type,
            currentState = {};
        
		switch(type) {
            case ActionTypes.GET_ALL_PHOTOS_SUCCESS: 
                return state.merge({content: action.content});;
                break;
            case ActionTypes.GET_ALL_PHOTOS_FAILURE:
                return state.merge({
                                content: action.content,
                                error : true
                            });   
            break;
            default : 
               return state;           
            break;
        }
	}
}
