import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../../components/themeToggle";
import { useLoaded } from "../../../../../hooks/useLoaded";
export const MobileIcon = (props: any) => {
    const loaded = useLoaded();

    return (
        <div className="mobileIcon fixed top-0 left-0 w-full px-[5vw] flex justify-between z-50 bg-white dark:bg-black">
            <div className="mobileIcon__theme">
                {loaded ? <ThemeToggle className="text-lg" /> : ""}
            </div>
            <div className="mobileIcon__hamburger text-black dark:text-blue text-xl">
                {props.showMenu == false ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        className=" hover:cursor-pointer"
                        onClick={props.handleClick}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className=" hover:cursor-pointer"
                        onClick={props.handleClick}
                    />
                )}
            </div>
        </div>
    );
};
