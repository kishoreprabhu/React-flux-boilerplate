import AppDispatcher from '../dispatcher/dispatcher';
import ActionTypes from '../actions/actionTypes';
import ajax from '../httpclient';

export default class detailViewActionCreator {
	constructor( dispatcher ) {
		this.dispatcher = dispatcher;
	}
}