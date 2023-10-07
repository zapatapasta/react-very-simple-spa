import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip} from 'recharts' 
import './Chart.css'
export default function Chart({title, data, datakey,grid }) {
    return(
        <div className="chart">
            <h3 className="chrtTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line dataKey={datakey} stroke='#5550bd' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};
