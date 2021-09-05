import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import Button from "../../components/Button/Button";
import ImageCard from "../../components/ImageCard/ImageCard";
import getText from "../../functions/getText";

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

const chooseCategoryText = (categories: number): string => {
    const category: { [key: number]: {} } = {
        0: getText("gamePage.kiss"),
        1: getText("gamePage.marry"),
        2: getText("gamePage.kill"),
    };

    return category[categories].toString();
};

const chooseCategoryColor = (categories: number): string => {
    const category: { [key: number]: {} } = {
        0: "text-red-700",
        1: "text-red-700",
        2: "text-red-700",
    };

    return category[categories].toString();
};

const GamePage: FC<IGamePage> = () => {
    const [images, setImages] = useState<IImage[] | []>([]);
    const [categories, setCategories] = useState<number>(0);

    useEffect(() => {
        setImages(getGameImages());
    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="flex justify-around items-center mb-16">
                {images.map((image) => {
                    return <ImageCard key={image.key} link={image.link} />;
                })}
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-5xl relative text-center">
                    {getText("gamePage.who")}
                    <span className={chooseCategoryColor(categories)}>
                        {getText("gamePage." + chooseCategoryText(categories))}
                    </span>
                    ?
                </p>

                <Button>
                    <p className="text-2xl">{getText("gamePage.reset")}</p>
                </Button>
            </div>
        </div>
    );
};

export default GamePage;
