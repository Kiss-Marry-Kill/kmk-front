import routes from "../constants/routes";

const getRoute = (key: string): string => {
    const route: string = routes[key];

    return route;
};

export default getRoute;
