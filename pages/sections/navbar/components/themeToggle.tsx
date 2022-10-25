import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggle = (props: any) => {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
                <div className="sun">
                    <FontAwesomeIcon icon={faSun} className={props.className} />
                </div>
            ) : (
                <div className="moon">
                    <FontAwesomeIcon
                        icon={faMoon}
                        className={props.className}
                    />
                </div>
            )}
        </button>
    );
};
