import { NavLogo } from "./components/navLogo";
import { NavLinks } from "./components/navLinks";
import { ThemeToggle } from "./components/themeToggle";
import { ResumeBtn } from "./components/resumeBtn";
import { useLoaded } from "../../../hooks/useLoaded";
export const Navbar = () => {
    const loaded = useLoaded();

    return (
        <div className="h-[8vh] navbar bg-white dark:bg-black w-full text-black dark:text-white py-[.8rem] px-[10rem] hidden tablet:flex items-center justify-between fixed top-0 z-50">
            <NavLogo className="navbar__logo w-[8.7rem] h-[2.5rem] relative" />
            <NavLinks />
            <div className="navbar__right grid grid-cols-2">
                {loaded ? <ThemeToggle className="text-[2.4rem]" /> : ""}
                <ResumeBtn />
            </div>
        </div>
    );
};
