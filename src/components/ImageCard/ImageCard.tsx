import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import Button from "../Button/Button";

export interface IImageCard {
    link: string;
    onClick: React.Dispatch<React.SetStateAction<number>>;
}

// const handleClick = () => {

// }

const ImageCard: FC<IImageCard> = ({ link, onClick }) => {
    const [borderColor] = useState<string>("bg-white");
    const borderClassName =
        "max-w-md " +
        borderColor +
        " rounded-xl overflow-hidden cursor-pointer shadow-lg hover:scale-110 transform transition-all duration-300";

    useEffect(() => {
        console.log(borderColor);
    }, [borderColor]);

    return (
        <div className="flex items-center justify-center">
            <Button onClick={() => onClick((prev) => prev + 1)}>
                <div className={borderClassName}>
                    <div className="p-4">
                        <img className="rounded-xl" src={link} alt="person" />
                    </div>
                </div>
            </Button>
        </div>
    );
};

export default ImageCard;
