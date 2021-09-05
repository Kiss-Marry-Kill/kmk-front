import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import getRoute from "../../functions/getRoute";
import getText from "../../functions/getText";
import Icon from "../Icon/Icon";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="lg:px-28 px-6 bg-white flex flex-wrap items-center justify-between lg:py-2 py-2 fixed w-screen z-10 shadow-lg">
            <div className="flex space-x-2">
                <p className="text-blue-700 text-3xl">F</p>
                <p className="text-yellow-400 text-3xl">M</p>
                <p className="text-red-700 text-3xl">K</p>
            </div>
            <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
            >
                <Icon name="menu" width="32px" height="32px" />
            </label>
            <input
                checked={isMenuOpen}
                onChange={() => setIsMenuOpen((prev) => !prev)}
                className="hidden"
                type="checkbox"
                id="menu-toggle"
            />

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
