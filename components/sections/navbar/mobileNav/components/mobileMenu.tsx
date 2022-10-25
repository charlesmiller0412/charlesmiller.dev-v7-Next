import { SocialLinks } from "../../../hero/components/social";
import { NavLogo } from "../../components/navLogo";

export const MobileMenu = (props: any) => {
    return (
        <>
            <div
                className={
                    props.showMenu == true
                        ? "mobileMenu fixed top-0 right-0 w-4/5 h-screen bg-white dark:bg-black z-40 flex items-center transition-all"
                        : "mobileMenu fixed top-0 -right-full w-4/5 h-screen bg-white dark:bg-black z-40 flex items-center transition-all"
                }
            >
                <ul className="pl-20">
                    <li className="py-5">
                        <a
                            href="#"
                            className="text-lg font-regular text-black dark:text-lightBlue"
                            onClick={props.handleClick}
                        >
                            Home
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#projects"
                            className="text-lg font-regular"
                            onClick={props.handleClick}
                        >
                            My Work
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#skills"
                            className="text-lg font-regular"
                            onClick={props.handleClick}
                        >
                            My Specialties
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#about"
                            className="text-lg font-regular"
                            onClick={props.handleClick}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="py-5">
                        <a
                            href="#contact"
                            className="text-lg font-regular"
                            onClick={props.handleClick}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
                <div className="mobileMenu__social w-3/4 absolute bottom-0 left-1/2 -translate-x-1/2">
                    <NavLogo className="navbar__logo w-[8.7rem] h-[2.5rem] relative m-auto" />
                    <SocialLinks
                        className="w-full flex justify-between py-12"
                        onClick={props.handleClick}
                    />
                </div>
            </div>
        </>
    );
};
