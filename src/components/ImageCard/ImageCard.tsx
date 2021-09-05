import { FC } from "react";

export interface IImageCard {
    link: string;
}

const ImageCard: FC<IImageCard> = ({ link }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                    <img className="rounded-xl" src={link} alt="person" />
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
