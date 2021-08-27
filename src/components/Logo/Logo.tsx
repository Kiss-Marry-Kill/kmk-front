import { FC } from "react";
import Icon from "../Icon/Icon";

export interface ILogo {
    className: string;
    width: string;
    height: string;
}

const Logo: FC<ILogo> = ({ className, width, height }) => {
    const iconsNames: string[] = ["kiss", "rings", "gun"];
    return (
        <div className={className}>
            {iconsNames.map((iN) => (
                <Icon name={iN} width={width} height={height} />
            ))}
        </div>
    );
};

export default Logo;
