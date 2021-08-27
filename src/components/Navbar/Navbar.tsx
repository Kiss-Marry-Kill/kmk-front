import { FC } from "react";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    return (
        <header className="lg:px-24 px-6 bg-white flex flex-wrap items-center justify-between lg:py-0 py-2 fixed w-screen z-10">
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
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"></ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
