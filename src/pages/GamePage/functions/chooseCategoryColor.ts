const chooseCategoryColor = (categories: number): string => {
    const category: { [key: number]: {} } = {
        0: "text-blue-700",
        1: "text-yellow-400",
        2: "text-red-700",
    };

    console.log(category[categories]);

    return category[categories].toString();
};

export default chooseCategoryColor;
