import React from 'react';
import styles from './dynamicphototile.css';
import MediaQuery from '../mediaquery/mediaqueries.jsx';

export default class Home extends React.Component {
	 constructor(props) {
		super(props); 
        this.state = {
			picList: []
        };
	}
     componentWillReceiveProps(nextProps) {
		let newValue = nextProps.picdata;
        // console.log(this.state.picList, "old")
        let newState = this.state.picList.concat(newValue);
        // console.log(newState, "new")
        this.setState({picList : newState});
	  }
    componentWillMount() {
        let viewPort = this.getViewPortWidth();
        this.setState({picList : this.props.picdata ? this.props.picdata : [], viewPort : viewPort });
    }
    componentDidMount() {
        this.attachResizeEvent();
    }
    attachResizeEvent() {
        window.addEventListener("resize", (event) => {
            let viewPort = this.getViewPortWidth();
            this.setState({viewPort: viewPort});
        })
    }
    getViewPortWidth() {
        var width = window.innerWidth,
            size = "desktop";
        if ( width <= 960 ) {
            if ( width <= 500 ) {
                size = "mobile";
            } else {
                size = "tab";
            }
        } 
        return size;
    }
    render() {
        let tileData = this.state.picList;
        //console.log(this.state);
        return (
            <div> 
                {
                    (tileData && tileData.length > 0) ?
                    <div>
                        <MediaQuery size={this.state.viewPort} pageref="tile" >
                            
                                {
                                    tileData.map( (value, index) =>
                                        <div key={index} className={"margin-bottom-twenty bg-white relative inline-block padding-ten s_pic"+' '+styles.pic_tile}>
                                            <img className="full-width" alt="Free Unsplash photo from Chris Barbalis" src={value.urls.regular}/>
                                        </div>
                                    ) 
                                }
                          
                        </MediaQuery>
                     </div>
                    :
                    <div className="padding-twenty text-center color-light-grey font-size-25">
                        {
                            this.props.isSearch === "true" ? 
                            "No Result Found" :
                            "No Pic Found in Spoyl Pic's"
                        } 
                    </div>
                }
            </div>
        );
    }
}