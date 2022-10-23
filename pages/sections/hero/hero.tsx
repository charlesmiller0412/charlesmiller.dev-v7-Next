import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "./components/social";
import { Headings } from "../../../components/headings";

export const Hero = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div
            className="hero w-screen h-screen pt-[12vh] px-10 tablet:pt-[8vh] tablet:px-[10rem] flex justify-start tablet:justify-center items-center tablet:items-start flex-col relative"
            id="hero"
        >
            <Headings
                className="self-start w-full"
                h5className="headings__left--h5 text-sm"
                h2className="headings--h2 text-xl tablet:text-xl"
                h5="my name is"
                h2={
                    <>
                        Charles
                        <span className="text-blue text-xl tablet:text-xl font-bold leading-[6.6rem] ml-3">
                            Miller
                        </span>
                    </>
                }
            />
            <h3 className="text-md w-full tablet:w-1/2 tablet:text-lg font-bold my-[1rem] tablet:my-[3.5rem] text-left z-10">
                I&apos;m a Front End Developer <br />&<br /> UX/UI Designer
            </h3>
            <SocialLinks className="socialLinks text-icons w-[17rem] flex justify-between" />
            <div className="hero__buttons flex justify-between w-full tablet:w-1/2 lg:max-w-[40rem] mt-[2rem] tablet:mt-[4.5rem] z-10">
                <Button
                    className="btn btn__light--blue w-2/5 whitespace-nowrap tablet:w-[15vw] lg:max-w-[18rem] "
                    text="See my work"
                    icon={faAnglesRight}
                />
                <Button
                    className="btn btn__light--black w-2/5 whitespace-nowrap tablet:w-[15vw] lg:max-w-[18rem] "
                    text="Hire Me"
                    icon={faAnglesRight}
                />
            </div>
            <div className="hero__image absolute -bottom-1/3 right-0 w-full max-w-[50rem] h-full tablet:right-0 tablet:top-1/4 tablet:w-1/2 tablet:h-full tablet:max-w-[74rem] tablet:max-h-[72.5rem]">
                <Image
                    src={
                        theme == "light"
                            ? "/assets/hero/heroImageLight.png"
                            : "/assets/hero/heroImage.png"
                    }
                    alt="image of Charles Miller"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
            </div>
        </div>
    );
};
