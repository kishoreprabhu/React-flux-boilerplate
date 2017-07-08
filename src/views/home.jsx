import React from 'react';
import SearchField from './component/searchfield/searchfield.jsx';
import AppDescription from './appdescription.jsx';
import PhotoTile from './component/dynamicphototile/dynamicphototile.jsx';
import AppDispatcher from '../dispatcher/dispatcher';
import Store from '../stores/homestore';
import Action from '../actions/homeaction';
import Spinner from './component/spinner/spinner.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.dispatcher = AppDispatcher;
		this.store = new Store(this.dispatcher);
	    this.action = new Action(this.dispatcher);
		this.state = {
	       isLoading: true	   
	   }
	  this.getAllPhotos();
	}
	getAllPhotos() {
		let options = {},
			url = "https://api.unsplash.com/photos/?client_id=bfe2cf7ed50e5419f1c399581f941e2cde4c35fc51dfb90c41fede82e4bd7912";
		options.url = url;
		this.action.getAllLibraryPic(options);
	}
	componentDidMount() {
		this.listener = this.store.addListener(this.onStateChanged.bind(this));
	}
	componentWillUnmount() {
		this.listener.remove();
	}
	onStateChanged() {
		var data = this.store.getState().toJSON();
		console.log(data, "from server");
		this.setState(data);
	}
	render() { 
		console.log(this.state, "parent");
			return (
			         <div className="home-page">
						 <SearchField fieldplaceholder="Search free high-resolution photos"/>
						 	<div className="content-area">
							 {
								 this.state.isLoading ? 
								 	 <Spinner/> : 
									  <div>
										<AppDescription/>
										<PhotoTile picdata={this.state.content}/>
									  </div>
							 }
						 </div>
					 </div>	
				  );
	}
}