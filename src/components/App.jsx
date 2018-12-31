import React from 'react'

//Imports are required for react grid layout to work
import '../assets/css/react-grid-layout.css'
import '../assets/css/react-resizable.css'

import styles from './styles/styles'

//imports for components
import LeftNavBar from './LeftNavBar'
import Graphs from './graphs/Graphs'

export default class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={styles.app}>
                <LeftNavBar/>
                <Graphs />
            </div>
        )
    }v

}