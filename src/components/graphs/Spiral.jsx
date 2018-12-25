import React from 'react'
import {RadialBarChart, ResponsiveContainer, RadialBar, Tooltip, Legend, LineChart} from 'recharts'
import {theme} from "./LineChart";

const data = [
    {name: '18-24', uv: 12.47,fill: '#8884d8'},
    {name: '25-29', uv: 26.69, fill: '#83a6ed'},
    {name: '30-34', uv: 15.69,fill: '#8dd1e1'},
    {name: '35-39', uv: 8.22, fill: '#82ca9d'},
    {name: '40-49', uv: 8.63,  fill: '#a4de6c'},
    {name: '50+', uv: 2.63, fill: '#d0ed57'},
    {name: 'garbage', uv: 6.67, fill: '#ffc658'}
];

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
    background: '#2c2c2c'
};

class Spiral extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        return (
            <ResponsiveContainer>
            <RadialBarChart data={data}>
                <Tooltip
                    wrapperStyle={{backgroundColor:'#000', fontSize:12}}/>
                <Legend
                    wrapperStyle={{color:theme.legendColor, fontSize:12}}
                    layout={'horizontal'} verticalAlign={'top'}
                    height={50}/>
                <RadialBar minAngle={70} background={{fill:style.background}} clockWise={true} dataKey='uv'/>
            </RadialBarChart>
            </ResponsiveContainer>
        );
    }
}

export default Spiral