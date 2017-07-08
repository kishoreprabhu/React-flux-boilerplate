import React from 'react';
import styles from './searchfield.css';

export default class SearchField extends React.Component {
    constructor(props) {
        super(props);
    }
	render() {
		return (
               <div className={styles.search_bar_wrapper}>
                    <div className="relative full-height">
                        <input onKeyUp={this.props.keyupHandler} type="text" maxLength="30" name="" title="Search" placeholder={this.props.fieldplaceholder} className="app-font-bold font-size-18 bg-f0 padding-left-twenty full-width full-height box-shadow-one"/>
                        <span className="theme-sprite search-icon pointer"></span>
                    </div>
                </div>
			);
	}
}
						