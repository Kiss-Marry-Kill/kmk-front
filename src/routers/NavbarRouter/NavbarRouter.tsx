import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import getRoute from "../../functions/getRoute";
import DashboardPage from "../../pages/DashboardPage/";
import GamePage from "../../pages/GamePage";

export interface INavbarRouter {}

const NavbarRouter: FC<INavbarRouter> = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path={getRoute("root")}>
                    <Redirect to={getRoute("game")} />
                </Route>
                <Route path={getRoute("game")}>
                    <GamePage />
                </Route>
                <Route path={getRoute("dashboard")}>
                    <DashboardPage />
                </Route>
                <Route path={getRoute("faq")}></Route>
            </Switch>
        </>
    );
};

export default NavbarRouter;
