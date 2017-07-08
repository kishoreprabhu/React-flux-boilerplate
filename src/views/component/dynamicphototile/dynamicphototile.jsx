import React from 'react';
import styles from './dynamicphototile.css';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

    render() {
        return (
             <div id={styles.dynamic_pic_wrapper}>
                <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from Chris Barbalis" src="https://images.unsplash.com/photo-1497979520324-8140b1524b8d?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=548&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
                <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from Pawel Nolbert" src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=470&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
                <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from Jakob Owens" src="https://images.unsplash.com/photo-1498878256124-0c5d71b3e26c?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=251&amp;q=80&amp;cs=tinysrgb&amp;crop="/>								
                </div>
                <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from Brooke Lark" src="https://images.unsplash.com/photo-1497888329096-51c27beff665?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=251&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
               <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from Aziz Acharki" src="https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=254&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
               <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from chuttersnap" src="https://images.unsplash.com/photo-1498721425774-488298864da7?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=251&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
               <div className={"margin-bottom-twenty bg-white relative inline-block padding-ten"+' '+styles.pic_tile}>
                    <img className="full-width" alt="Free Unsplash photo from ian dooley" src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=376&amp;h=564&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
                </div>
            </div>
        );
    }
}