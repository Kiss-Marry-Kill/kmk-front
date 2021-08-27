import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import getRoute from "../../functions/getRoute";

export interface INavbarRouter {}

const NavbarRouter: FC<INavbarRouter> = () => {
    return (
        <Switch>
            <Route exact path={getRoute("root")}>
                <Redirect to={getRoute("game")} />
            </Route>
            <Route path={getRoute("game")}></Route>
            <Route path={getRoute("dashboard")}></Route>
            <Route path={getRoute("faq")}></Route>
            <Route path={getRoute("noMatch")}></Route>
        </Switch>
    );
};

export default NavbarRouter;
