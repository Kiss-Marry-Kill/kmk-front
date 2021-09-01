export interface IRoutes {
    [key: string]: string;
}

const routes: IRoutes = {
    root: "/",
    game: "/game",
    dashboard: "/dashboard",
    faq: "/faq",
    noMatch: "*",
};

export default routes;
