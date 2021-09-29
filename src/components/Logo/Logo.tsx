import { FC } from "react";
import Icon from "../Icon/Icon";

export interface ILogo {
    className: string;
    width: string;
    height: string;
}

const Logo: FC<ILogo> = ({ className, width, height }) => {
    const iconsNames: { key: number; name: string }[] = [
        {
            key: 1,
            name: "kiss",
        },
        {
            key: 2,
            name: "rings",
        },
        {
            key: 3,
            name: "gun",
        },
    ];
    return (
        <div className={className}>
            {iconsNames.map((iN) => (
                <Icon
                    key={iN.key}
                    name={iN.name}
                    width={width}
                    height={height}
                />
            ))}
        </div>
    );
};

export default Logo;
