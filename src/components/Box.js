import React from 'react'
import {connect} from 'react-redux'

class Box extends React.Component {
    render() {
        let {array} = this.props;
        return (
            <div id='box'>
                    {array.map((value, index) => <div className='element' key={index} style={{ height: `${value}%` }}></div>)}
            </div>);
    }
}
const mapStateToProps = (state) => {
    let { array } = state;
    return {
        array
    };
};
export default connect(mapStateToProps)(Box);