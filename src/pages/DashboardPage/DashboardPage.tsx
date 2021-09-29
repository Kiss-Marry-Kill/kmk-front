import { FC, useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import ImageCard from "../../components/ImageCard/ImageCard";

export interface IDashboardPage {}

interface IImage {
    key: number;
    link: string;
    iconName: string;
}

const getDashboardImages = (): IImage[] => {
    const images = [
        {
            key: 1,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
            iconName: "kiss",
        },
        {
            key: 2,
            link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
            iconName: "rings",
        },
        {
            key: 3,
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
                        <div className="flex justify-center mt-6">
                            <Icon
                                name={image.iconName}
                                width="90px"
                                height="90px"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardPage;
