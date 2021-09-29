import getText from "../../../functions/getText";

const chooseCategoryText = (categories: number): string => {
    const category: { [key: number]: {} } = {
        0: getText("gamePage.kiss"),
        1: getText("gamePage.marry"),
        2: getText("gamePage.kill"),
    };

    return category[categories].toString();
};

export default chooseCategoryText;
