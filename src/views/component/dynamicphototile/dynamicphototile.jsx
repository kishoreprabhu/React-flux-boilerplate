import React from 'react';
import styles from './dynamicphototile.css';

export default class Home extends React.Component {
	 constructor(props) {
		super(props); 
        this.state = {
			picList: []
        };
	}
    componentWillMount() {
        this.setState({picList : this.props.picdata ? this.props.picdata : [] });
    }
    componentDidMount() {
         //console.log("didmount", this.props);
    }
    render() {
        var tileData = this.state.picList;
        return (
            <div> 
                {
                    (tileData && tileData.length > 0) ?
                    <div id={styles.dynamic_pic_wrapper}>
                        {
                            tileData.map( (value, index) =>
                                <div key={index} className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                                    <img className="full-width" alt="Free Unsplash photo from Chris Barbalis" src={value.urls.regular}/>
                                </div>
                            ) 
                        }
                    </div> :
                    <div className="padding-twenty text-center color-light-grey font-size-25"> No Pic Found in Spoyl Pic's</div>
                }
            </div>
        );
    }
}