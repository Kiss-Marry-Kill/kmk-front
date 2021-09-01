import { FC } from "react";
import Kiss from "./Kiss";
import Rings from "./Rings";
import Gun from "./Gun";
import Dashboard from "./Dashboard";
import FAQ from "./FAQ";

export interface IIcon {
    name: string;
    width?: string;
    height?: string;
}

interface IIcons {
    [key: string]: JSX.Element;
}

const Icon: FC<IIcon> = ({ name, ...props }) => {
    const icons: IIcons = {
        kiss: <Kiss {...props} />,
        rings: <Rings {...props} />,
        gun: <Gun {...props} />,
        dashboard: <Dashboard {...props} />,
        faq: <FAQ {...props} />,
    };

    return icons[name] || null;
};

export default Icon;
