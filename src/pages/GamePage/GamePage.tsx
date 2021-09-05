import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import GameButtons from "../../components/GameButtons/GameButtons";
import ImageCard from "../../components/ImageCard/ImageCard";

export interface IGamePage {}

interface IImage {
    key: number;
    link: string;
}

const getGameImages = (): IImage[] => {
    const images = [
        {
            key: 1,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
        },
        {
            key: 2,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
        },
        {
            key: 3,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
        },
    ];

    return images;
};

const GamePage: FC<IGamePage> = () => {
    const [images, setImages] = useState<IImage[] | []>([]);

    useEffect(() => {
        setImages(getGameImages());
    }, []);

    return (
        <div className="flex min-h-screen justify-around items-center">
            {images.map((image) => {
                return (
                    <div key={image.key}>
                        <ImageCard link={image.link} />
                        <GameButtons />
                    </div>
                );
            })}
        </div>
    );
};

export default GamePage;
