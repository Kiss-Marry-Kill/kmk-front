import enTexts from "../constants/enTexts";
import { ITexts } from "../interfaces/ITexts";

export interface IGetText {
    [key: string]: {};
}

const getText = (keys: string): IGetText => {
    const texts = enTexts;

    const splitKeys: string[] = keys.split(".");

    var objKey: ITexts = texts;
    splitKeys.slice(0, -1).map((key) => {
        objKey = objKey[key];
        return objKey;
    });

    return objKey[splitKeys.slice(-1)[0]];
};

export default getText;
