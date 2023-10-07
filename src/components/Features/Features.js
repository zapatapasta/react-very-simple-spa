import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import './Features.css'
export default function Features() {
    return(
        <div className="features">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureContainer">
                    <span className="featureMoney"></span>
                    <span className="featureRate">
                        -11.4 <ArrowDownwardIcon className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last mounth</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featureContainer">
                    <span className="featureMoney"></span>
                    <span className="featureRate">
                        -11.4 <ArrowDownwardIcon className="featureIcon negative" />
                    </span>
                </div>
                <span className="featureSub">Compared to last mounth</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureContainer">
                    <span className="featureMoney"></span>
                    <span className="featureRate">
                        +2.4 <ArrowUpwardIcon className="featureIcon" />
                    </span>
                </div>
                <span className="featureSub">Compared to last mounth</span>
            </div>
        </div>
    )
};
