import React from 'react';
import PropTypes from 'prop-types';

export class MediaQuery  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let size = this.props.size;
        return (
            <div className={`MediaQuery-${size}-${this.props.pageref}`}>
                { this.props.children }
            </div>
        );
    }
}

MediaQuery.defaultProps = {
    size: 'mobile'
}

MediaQuery.propTypes = {
    size: React.PropTypes.oneOf(['mobile', 'desktop', 'tab'])
}

export default MediaQuery;