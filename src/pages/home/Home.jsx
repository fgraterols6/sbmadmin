import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

import "./home.css";

export default function home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    )
}
