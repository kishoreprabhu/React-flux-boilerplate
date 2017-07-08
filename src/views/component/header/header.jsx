import React from 'react';
import Styles from './header.css';
import { Link } from 'react-router';
export default class Header extends React.Component {
	render () {
	   return (
				<header className={"bg-24 color-white"+' '+Styles.header_wrap}>
				   <div className="clear padding-twenty">
						<div className={"inline-block font-size-24 padding-left-ten"+' '+Styles.app_logo}>Spoyl Pic's</div>
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
					</div>
				</header>
               );	   
	}
}