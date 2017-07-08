import AppDispatcher from '../dispatcher/dispatcher';
import ActionTypes from '../actions/actionTypes';
import ajax from '../httpclient';

export default class detailViewActionCreator {
	constructor( dispatcher ) {
		this.dispatcher = dispatcher;
		this.getAllLibraryPic = this.getAllLibraryPic.bind(this);
	}
	getAllLibraryPic( ajaxOptions ) {
		let _this = this,
			url = ajaxOptions.url;
		ajax.serverRequest({
			'url' : url,
			'method' : 'GET'
		}).then( (response) => {
			//console.log(response, "sucessblk");
			let data = response ? response.data : {};
			_this.dispatcher.dispatch({
				"type" : ActionTypes.GET_ALL_PHOTOS_SUCCESS,
				"content" : data
			  }
			);
		}).catch( (error) => {
				//console.log(error, "errorblk");
			 let data = error ? error.data : {};
			 _this.dispatcher.dispatch({
				"type": ActionTypes.GET_ALL_PHOTOS_FAILURE,
				"content" : data
			 });
		});
	}
}