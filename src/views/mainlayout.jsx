import React from 'react';

export default class MainLayout extends React.Component {
	render() {
		return ( <div className='app-container'>
					<main>{this.props.children}</main>
				 </div>);
	}
}