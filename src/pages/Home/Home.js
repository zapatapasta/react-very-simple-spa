import React from 'react'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import { xAxisData } from '../../datas'
import './Home.css'
export default function Home() {
    return(
        <div className="home">
            <Features/>
            <Chart grid title="Mounth Sale" data={xAxisData} datakey="Sale" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
};
