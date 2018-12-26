import React from 'react'
import GridLayout from 'react-grid-layout';
import styles from '../styles/styles'
import {Spark} from './Sparklines'
import LineChart from './LineChart'
import Stats from './Stats'
import Spiral from "./Spiral";
import '../../assets/css/dashboard.css'
import EditableText from "../form/EditText";

const charts = [
    {
        key: 'spark',
        dataGrid: {x: 0, y: 0, w: 3, h: 3, static:true},
        graph: <Spark/>,
        static: true,
        heading: 'Spark Line'
    },
    {
        key: 'spiral',
        dataGrid: {x: 0, y: 0, w: 3, h: 6},
        graph: <Spiral />,
        static: true,
        heading: 'Spiral Chart'
    },
    {
        key: 'lineChart',
        dataGrid: {x: 3, y: 0, w: 9, h: 9},
        graph: <LineChart/>,
        heading: 'Line Chart'

    },
    {
        key: 'stats',
        dataGrid: {x: 0, y: 1, w: 12, h: 8},
        graph: <Stats/>,
        heading: 'Spark Chart'

    }
]


class Graphs extends React.Component {


    renderCharts() {
        return charts.map(chart => {
                return (
                    <div key={chart.key} data-grid={{...chart.dataGrid}} style={styles.box}>
                        <div className={'heading'} >
                            <div className={'dragMe'}/>
                            <EditableText i={chart.key} defaultValue={chart.heading}/>
                        </div>
                        {chart.graph}
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div style={styles.graph}>
            <GridLayout rowHeight={30} width={1200} verticalCompact={true} compactType={'vertical'} draggableHandle=".dragMe">
                {this.renderCharts()}
            </GridLayout>
            </div>
        )
    }
}

export default Graphs

//TODO <div>Icons made by <a href="https://www.flaticon.com/authors/stephen-hutchings" title="Stephen Hutchings">Stephen Hutchings</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>e