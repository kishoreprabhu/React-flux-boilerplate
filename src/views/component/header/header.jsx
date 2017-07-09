import React from 'react';
import Styles from './header.css';
import { Link } from 'react-router';
import MediaQuery from '../mediaquery/mediaqueries.jsx';

export default class Header extends React.Component {
	componentWillMount() {
		this.predictViewPortSize();
	}
	predictViewPortSize() {
		let viewPort = this.getViewPortSize();
		this.setState({viewPort:viewPort});
	}
	getViewPortSize() {
		let width = window.innerWidth,
			size = "desktop";
		if ( width <= 680 ) {
			size = "mobile";
		}
		return size;
	}
	componentDidMount() {
		this.attachResizeHandlr();
	}
	attachResizeHandlr() {
		window.addEventListener("resize", (event)=> {
			this.predictViewPortSize();
		});
	}
	render () {
	   let size = this.state.viewPort;
	  // console.log(size, "viewport");
	   return (
				<header className={"bg-24 color-white"+' '+Styles.header_wrap}>
				   <div className="clear padding-twenty">
						<div className={"float-left font-size-24 padding-left-ten pointer"+' '+Styles.app_logo}>
							<Link to="/"> Spoyl Pic's</Link>
						</div>
						{
						   size === "desktop" ?
						     <MediaQuery size={size} pageref="header">
								<nav className={"inline-block"+' '+Styles.menu_list_wrap}>
									<li className="inline-block pointer margin-left-twenty margin-right-twenty font-size-20">
										<Link to="/" activeClassName="active">Home</Link>
									</li>
									<li className="inline-block pointer margin-left-twenty margin-right-twenty font-size-20">
										<Link to="" activeClassName="active">New</Link>
									</li>
									<li className="inline-block pointer margin-left-twenty margin-right-twenty font-size-20">
										<Link to="" activeClassName="active">Collection</Link>
									</li>
								</nav>
								<div className={"float-right"+' '+Styles.auth_line_height}>
									<div className="float-left padding-right-twenty pointer">Login</div>
									<div className="float-left padding-right-ten pointer">Sign up</div>
								</div>
							</MediaQuery>:
							<MediaQuery size={size} pageref="header">
								 <div className="mobile-menu pointer float-right">
									 <div className="hambug-icon"></div>
								</div>
							</MediaQuery>

						}
					</div>
				</header>
               );	   
	}
}