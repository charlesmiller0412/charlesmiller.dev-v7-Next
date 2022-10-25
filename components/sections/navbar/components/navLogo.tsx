import Image from "next/image";
import { useTheme } from "next-themes";

export const NavLogo = (props: any) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={props.className}>
            <a href="#">
                <Image
                    src={
                        theme == "dark"
                            ? "/assets/logos/logoDark.svg"
                            : "/assets/logos/logo.svg"
                    }
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                />
            </a>
        </div>
    );
};
