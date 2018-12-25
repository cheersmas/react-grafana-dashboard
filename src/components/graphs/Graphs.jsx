import React from 'react'
import GridLayout from 'react-grid-layout';
import styles from '../styles/styles'
import {Spark} from './Sparklines'
import LineChart from './LineChart'
import Stats from './Stats'

const charts = [
    {
        key: 'spark',
        dataGrid: {x: 0, y: 0, w: 3, h: 2, static:true},
        graph: <Spark/>,
        static: true
    },
    {
        key: 'stats1',
        dataGrid: {x: 0, y: 0, w: 3, h: 3},
        graph: <Stats />,
        static: true
    },
    {
        key: 'stats2',
        dataGrid: {x: 0, y: 0, w: 3, h: 3},
        graph: <Stats />,
        static: true
    },
    {
        key: 'lineChart',
        dataGrid: {x: 3, y: 0, w: 9, h: 8},
        draggableHandle: ".dragHandle",
        graph: <LineChart/>,
    },
    {
        key: 'c',
        dataGrid: {x: 0, y: 1, w: 12, h: 8},
        graph: 'some',
    }
]


class Graphs extends React.Component {


    renderCharts() {
        return charts.map(chart => {
                return (
                    <div key={chart.key} data-grid={{...chart.dataGrid}} style={styles.box}>
                        {chart.graph}
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div style={styles.graph}>
            <GridLayout rowHeight={30} width={1200} verticalCompact={true} compactType={'vertical'}>
                {this.renderCharts()}
            </GridLayout>
            </div>
        )
    }
}

export default Graphs