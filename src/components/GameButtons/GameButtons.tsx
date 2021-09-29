import { FC } from "react";
import Button from "../Button";
import Icon from "../Icon";

export interface IGameButtons {}

interface IButton {
    key: number;
    iconName: string;
}

const GameButtons: FC<IGameButtons> = () => {
    const buttons: IButton[] = [
        {
            key: 1,
            iconName: "kiss",
        },
        {
            key: 2,
            iconName: "rings",
        },
        {
            key: 3,
            iconName: "gun",
        },
    ];

    return (
        <div className="flex justify-around mt-6">
            {buttons.map((button) => {
                return (
                    <Button
                        className="hover:scale-125 transform transition-all duration-300"
                        key={button.key}
                    >
                        <Icon
                            name={button.iconName}
                            width="90px"
                            height="90px"
                        />
                    </Button>
                );
            })}
        </div>
    );
};

export default GameButtons;
