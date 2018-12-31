import React from 'react'
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'
import {theme, CustomizedAxisTick} from './LineChart'
import {updateData} from "../../actions/action-dispatcher";
import {connect} from 'react-redux'

class Draggable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    static getDerivedStateFromProps(props) {
        console.log(props.barData)
        return {data: props.barData}
    }

    componentDidMount() {
        this.props.updateData('bar')
    }

    render() {
        return (
            <ResponsiveContainer>
                <BarChart data={this.state.data}
                          margin={{top: 10, right: 40, left: 10, bottom: 50}}
                >
                    <CartesianGrid stroke={theme.gridStroke}/>
                    <XAxis dataKey="name" padding={{left: 30, right: 30}} tick={<CustomizedAxisTick/>}/>
                    <YAxis tick={<CustomizedAxisTick/>}/>
                    <Tooltip wrapperStyle={{backgroundColor: '#000', fontSize: 12}}/>
                    <Legend wrapperStyle={{color: theme.legendColor, fontSize: 12}}
                            layout={'horizontal'} verticalAlign={'top'}
                            height={36}/>
                    <ReferenceLine y={0} stroke='#000'/>
                    <Brush dataKey='name' height={15} stroke="gray" fill={'#000'}/>
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        barData: state.bar.barData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (type) => dispatch(updateData(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Draggable)
