import React from 'react'
import { connect } from 'react-redux'

class Box extends React.Component {
    render() {
        let { array } = this.props;
        return (
            <div id='box'>
                {array.map((value, index) =>
                    <div className='element'
                        key={index}
                        style={{
                            height: `${value}%`,
                            backgroundColor: `rgba(98,00,238,${value / 100 < 0.50 ? 0.50 : value / 100})`
                            // backgroundColor: `rgba(3,218,197,255)`
                        }}>
                    </div>)}
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