import React from 'react'
import styles from './styles/styles'
import {updateData} from "../actions/action-dispatcher";
import {connect} from 'react-redux'

const buttons = [
    {
        key: 'bar',
        text: 'Update Bar Data'
    },
    {
        key: 'line',
        text: 'Update Line Data',
    },
    {
        key: 'spiral',
        text: 'Update Spiral Data'
    }
]


class LeftNavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={styles.leftNavStyle}>
                {buttons.map(button =>  <button key={button.key} onClick={() => this.props.updateData(button.key)}>{button.text}</button>)}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type) => dispatch(updateData(type))
    };
};

export default connect(null,mapDispatchToProps)(LeftNavBar)