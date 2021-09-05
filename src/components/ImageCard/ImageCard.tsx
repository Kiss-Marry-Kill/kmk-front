import { FC } from "react";

export interface IImageCard {
    link: string;
}

const ImageCard: FC<IImageCard> = ({ link }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg ">
                <div className="p-4">
                    <img className="rounded-xl" src={link} alt="person" />
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
