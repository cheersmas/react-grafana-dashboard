import React from 'react'
import {ResponsiveContainer, CartesianGrid, XAxis,Label, LineChart, YAxis, Tooltip, Legend, Line} from 'recharts'
import lineData from '../../data/data-line'

export const theme = {
    tickText: '#7c7c7c',
    gridStroke: '#000',
    lineStroke: '#ff8b00',
    dotFill: '#1c0d00',
    dotStroke: '#b1b1b1',
    legendColor: '#7c7c7c'
}

class CustomizedAxisTick extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        const {x, y, stroke, payload} = this.props;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fontSize={12} fill={theme.tickText}>{payload.value}</text>
            </g>
        );
    }
};


class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.renderData = this.renderData.bind(this);
    }

    componentDidMount() {
        this.renderData()
    }

    renderData() {
        let data = lineData.map((item) => ({
            date: (new Date(item.dt)).toLocaleTimeString(),
            temperature: item.main.temp
        }))
        this.setState({data})
    }

    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.state.data}
                           margin={{ top: 10, right: 40, left:10, bottom:40 }}
                >
                    <CartesianGrid stroke={theme.gridStroke}/>
                    <XAxis
                        dataKey="date" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
                    <YAxis
                        domain={['dataMin-5', 'dataMax+10']} tick={<CustomizedAxisTick/>}/>
                    <Tooltip
                        wrapperStyle={{backgroundColor:'#000', fontSize:12}}/>
                    <Legend
                        wrapperStyle={{color:theme.legendColor, fontSize:12}}
                        layout={'vertical'} verticalAlign={'top'}
                        height={36}/>
                    <Line
                        type="linear"
                        dataKey="temperature"
                        stroke={theme.lineStroke}
                        dot={{ stroke: theme.dotStroke, strokeWidth: 1, fill:theme.dotFill}}
                        activeDot/>
                </LineChart>
            </ResponsiveContainer>
        )

    }
}

export default LineGraph