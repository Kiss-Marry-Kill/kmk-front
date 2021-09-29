import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import Button from "../../components/Button/Button";
import ImageCard from "../../components/ImageCard/ImageCard";
import getText from "../../functions/getText";
import {
    chooseCategoryColor,
    chooseCategoryText,
    getGameImages,
} from "./functions";
import { IImage } from "./interfaces";

export interface IGamePage {}

const GamePage: FC<IGamePage> = () => {
    const [images, setImages] = useState<IImage[] | []>([]);
    const [categories, setCategories] = useState<number>(0);

    useEffect(() => {
        setImages(getGameImages());
    }, []);

    const onClick = () => {
        setCategories((prev) => {
            return prev === 2 ? 0 : prev + 1;
        });
    };

    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="flex justify-around items-center mb-16">
                {images.map((image) => {
                    return (
                        <ImageCard
                            onClick={onClick}
                            key={image.key}
                            link={image.link}
                        />
                    );
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

                <Button onClick={() => setCategories(0)}>
                    <p className="text-2xl">{getText("gamePage.reset")}</p>
                </Button>
            </div>
        </div>
    );
};

export default GamePage;
