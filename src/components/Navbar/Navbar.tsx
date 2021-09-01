import { FC } from "react";
import { NavLink } from "react-router-dom";
import getRoute from "../../functions/getRoute";
import getText from "../../functions/getText";
import Logo from "../Logo/Logo";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    return (
        <header className="lg:px-24 px-6 bg-white flex flex-wrap items-center justify-between lg:py-2 py-2 fixed w-screen z-10 shadow-lg">
            <Logo className="flex space-x-3" width="42px" height="42px" />
            <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
            ></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 space-x-5">
                        <NavLink to={getRoute("game")}>
                            <li>{getText("navbar.game")}</li>
                        </NavLink>
                        <NavLink to={getRoute("dashboard")}>
                            <li>{getText("navbar.dashboard")}</li>
                        </NavLink>
                        <NavLink to={getRoute("faq")}>
                            <li>{getText("navbar.faq")}</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
