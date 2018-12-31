import React from 'react'
import {ResponsiveContainer, CartesianGrid, XAxis, LineChart, YAxis, Tooltip, Legend, Line} from 'recharts'
import lineData from '../../data/data-line'
import {updateData} from "../../actions/action-dispatcher";
import connect from "react-redux/es/connect/connect";

export const theme = {
    tickText: '#7c7c7c',
    gridStroke: '#000',
    lineStroke: '#ff8b00',
    dotFill: '#1c0d00',
    dotStroke: '#b1b1b1',
    legendColor: '#7c7c7c'
}

export class CustomizedAxisTick extends React.Component{
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
            data: null
        }
    }

    static getDerivedStateFromProps(props) {
        return {data: props.lineData}
    }

    componentDidMount() {
        this.props.updateData('line')
    }

    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.state.data}
                           margin={{ top: 10, right: 40, left:10, bottom:50 }}
                >
                    <CartesianGrid stroke={theme.gridStroke}/>
                    <XAxis
                        dataKey="name" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
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
                        dataKey="value"
                        stroke={theme.lineStroke}
                        dot={{ stroke: theme.dotStroke, strokeWidth: 1, fill:theme.dotFill}}
                        activeDot/>
                </LineChart>
            </ResponsiveContainer>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        lineData: state.line.lineData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type) => dispatch(updateData(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)
