import React from 'react'
import styles from './styles/styles'
import {updateData} from "../actions/action-dispatcher";
import {connect} from 'react-redux'

class LeftNavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={styles.leftNavStyle}>
                <button onClick={() => this.props.updateData('bar')}>Change Bar data</button>
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