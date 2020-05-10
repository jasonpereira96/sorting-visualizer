import React from 'react'
import { connect } from 'react-redux'
import { arrayChange, disableControls, enableControls, changeSpeed, changeAlgo } from './../actions/actions'
import { generateArray } from './../utils/utils'
import { getSortFn } from './../utils/utils'
import {
    MERGESORT,
    BUBBLESORT,
    HEAPSORT
} from './../constants/constants'

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.array = props.array;
        this.onSort = this.onSort.bind(this);
        this.makeNewArray = this.makeNewArray.bind(this);
        this.onSpeedSliderChange = this.onSpeedSliderChange.bind(this);
        this.onSizeSliderChange = this.onSizeSliderChange.bind(this);
        this.onAlgoChage = this.onAlgoChage.bind(this);

        this.newArrayButtonRef = React.createRef();
        this.sortButtonRef = React.createRef();
        this.speedSliderRef = React.createRef();
        this.sizeSliderRef = React.createRef();
        this.selectRef = React.createRef();
    }
    onSort() {
        var me = this;
        let array = this.props.array;
        let sortSpeed = this.props.toolbar.sortSpeed;
        let algo = this.props.toolbar.algo;
        if (!this.isAlreadySorted()) {
            this.disableControls();
            // let arrayStates = bubbleSort(array);
            let sortFn = getSortFn(algo);
            let arrayStates = sortFn(array);
            // dispatch(arrayChange([66,44,33]));
            let i = 0;
            let timerId = setInterval(function () {
                me.props.onSort(arrayStates[i]);
                i++;
                if (i === arrayStates.length) {
                    clearInterval(timerId);
                    me.enableControls();
                }
            }, sortSpeed);
        }
    }
    makeNewArray() {
        let array = generateArray(this.props.array.length);
        this.props.makeNewArray(array);
    }
    disableControls() {
        this.props.disableControls()
    }
    enableControls() {
        this.props.enableControls()
    }
    onSpeedSliderChange() {
        let speedSlider = this.speedSliderRef.current;
        let value = parseInt(speedSlider.value);
        let newSpeed = 210 - value;
        this.props.changeSpeed(newSpeed);
    }
    onSizeSliderChange(e) {
        let sizeSlider = this.sizeSliderRef.current;
        console.log(sizeSlider.value);
        let size = parseInt(sizeSlider.value);
        let array = generateArray(size);
        this.props.makeNewArray(array);
    }
    onAlgoChage() {
        let select = this.selectRef.current;
        this.props.changeAlgo(select.value);
    }
    isAlreadySorted() {
        let array = this.props.array;
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                return false;
            }
        }
        return true;
    }

    componentDidUpdate() {
        let sortButton = this.sortButtonRef.current;
        let newArrayButton = this.newArrayButtonRef.current;
        let speedSlider = this.speedSliderRef.current;
        let sizeSlider = this.sizeSliderRef.current;

        sortButton.disabled = !this.props.toolbar.controlsEnabled;
        newArrayButton.disabled = !this.props.toolbar.controlsEnabled;
        speedSlider.disabled = !this.props.toolbar.controlsEnabled;
        sizeSlider.disabled = !this.props.toolbar.controlsEnabled;
    }
    componentDidMount() {
        let sizeSlider = this.sizeSliderRef.current;
        sizeSlider.value = this.props.array.length;
        let speedSlider = this.speedSliderRef.current;
        speedSlider.value = this.props.toolbar.sortSpeed;
    }
    render() {
        return <div id='toolbar'>
            {/* <div></div> */}
            <div>
                <button onClick={this.makeNewArray} ref={this.newArrayButtonRef} >New Array</button>
            </div>
            <div>
                <button onClick={this.onSort} ref={this.sortButtonRef}>sort</button>
            </div>
            <div>
                <label>speed</label>
                <input type='range' id='speed' min={10} max={200} ref={this.speedSliderRef} onChange={this.onSpeedSliderChange} />
            </div>
            <div>
                <label>size</label>
                <input type='range' id='length' min={2} max={100} ref={this.sizeSliderRef} onChange={this.onSizeSliderChange} />
            </div>
            <div>
                <select ref={this.selectRef} onChange={this.onAlgoChage}>
                    <option value={MERGESORT}>mergesort</option>
                    <option value={BUBBLESORT}>bubblesort</option>
                    <option value={HEAPSORT}>heapsort</option>
                </select>
            </div>

        </div>;
    }
}
const mapStateToProps = state => {
    return {
        array: state.array,
        toolbar: state.toolbar
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSort: function (arrayState) {
            dispatch(arrayChange(arrayState));
        },
        makeNewArray: function (array) {
            dispatch(arrayChange(array))
        },
        disableControls: function () {
            dispatch(disableControls())
        },
        enableControls: function () {
            dispatch(enableControls())
        },
        changeSpeed: function (newSpeed) {
            dispatch(changeSpeed(newSpeed));
        },
        changeAlgo: function (newAlgo) {
            dispatch(changeAlgo(newAlgo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)