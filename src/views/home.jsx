import React from 'react';
import SearchField from './component/searchfield/searchfield.jsx';
import AppDescription from './appdescription.jsx';
import PhotoTile from './component/dynamicphototile/dynamicphototile.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	
	}
	componentWillUnmount() {
		
	}
	render() {
			return (
			         <div className="home-page">
						 <SearchField fieldplaceholder="Search free high-resolution photos"/>
						 <AppDescription/>
						 <div className="content-area">
							  <PhotoTile/>
						 </div>
					 </div>	
				  );
	}
}