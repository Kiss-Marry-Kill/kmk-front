import { FC } from "react";

export interface IButton {
    children?: React.ReactNode;
    onClick?: VoidFunction;
    className?: string;
}

const Button: FC<IButton> = ({ children, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
