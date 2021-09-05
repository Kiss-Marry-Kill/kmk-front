import { FC } from "react";
import ImageCard from "../../components/ImageCard/ImageCard";

export interface IGamePage {}

const GamePage: FC<IGamePage> = () => {
    return (
        <div className="flex justify-around">
            <ImageCard link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE" />
            <ImageCard link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE" />
            <ImageCard link="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE" />
        </div>
    );
};

export default GamePage;
