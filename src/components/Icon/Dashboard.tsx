import { memo } from "react";
import { SVGAttributes } from "react";

const Dashboard = (props: SVGAttributes<SVGElement>) => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z"
        />
    </svg>
);

export default memo(Dashboard);
