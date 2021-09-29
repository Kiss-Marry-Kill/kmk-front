import { memo, SVGAttributes } from "react";

const Menu = (props: SVGAttributes<SVGElement>) => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
    </svg>
);

export default memo(Menu);
