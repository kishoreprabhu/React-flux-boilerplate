import React from 'react';
import Header from './component/header/header.jsx';
export default class MainLayout extends React.Component {
	render() {
		return ( <div className='app-container'>
					<Header/>
					<main id="app-main-container">
						<div className="middle-block-wrapper">
							{this.props.children}
						</div>
					</main>
				 </div>);
	}
}