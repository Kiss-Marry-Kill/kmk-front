import { FC, useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import getText from "../../functions/getText";
import { chooseCategoryColor, chooseCategoryText } from "../GamePage/functions";

export interface IDashboardPage {}

interface IImage {
    key: number;
    link: string;
    iconName: string;
}

const getDashboardImages = (): IImage[] => {
    const images = [
        {
            key: 0,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
            iconName: "kiss",
        },
        {
            key: 1,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
            iconName: "rings",
        },
        {
            key: 2,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
            iconName: "gun",
        },
    ];

    return images;
};

const DashboardPage: FC<IDashboardPage> = () => {
    const [images, setImages] = useState<IImage[] | []>([]);

    useEffect(() => {
        setImages(getDashboardImages());
    }, []);

    const onClick = () => {
        console.log("Clicked");
    };

    return (
        <div className="flex min-h-screen justify-around items-center">
            {images.map((image) => {
                return (
                    <div key={image.key}>
                        <ImageCard onClick={onClick} link={image.link} />
                        <p className="text-5xl relative text-center mt-8">
                            <span className={chooseCategoryColor(image.key)}>
                                {getText(
                                    "gamePage." + chooseCategoryText(image.key)
                                )
                                    .toString()
                                    .charAt(0)
                                    .toUpperCase() +
                                    getText(
                                        "gamePage." +
                                            chooseCategoryText(image.key)
                                    )
                                        .toString()
                                        .slice(1)}
                            </span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardPage;
