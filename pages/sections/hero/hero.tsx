import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "./components/social";
import { Headings } from "../../../components/headings";
import { ProjectCarousel } from "./components/projectCarousel";
import { AnimationOnScroll } from "react-animation-on-scroll";
export const Hero = (props: any) => {
    const { theme, setTheme } = useTheme();

    return (
        <section
            className="hero w-screen max-w-[120rem] m-auto h-screen pt-[10vh] px-10 tablet:pt-[8vh] tablet:px-[10rem] flex flex-col tablet:flex-row items-center"
            id="hero"
        >
            <div className="hero__left w-full flex justify-start tablet:justify-center items-start tablet:items-start flex-col">
                <Headings
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
                <h3 className="text-md text-center w-fit m-auto tablet:w-full tablet:text-lg font-bold my-[1rem] tablet:my-[3.5rem] tablet:text-left z-10">
                    I&apos;m a Front End Developer <br />&<br /> UX/UI Designer
                </h3>
                <AnimationOnScroll
                    animateIn="animate__bounce"
                    className="w-full"
                    animatePreScroll
                >
                    <SocialLinks className="socialLinks text-icons w-[17rem] flex justify-between m-auto tablet:m-0" />
                </AnimationOnScroll>
                <div className="hero__buttons flex justify-evenly tablet:justify-between w-full m-auto tablet:m-0 tablet:w-full tablet:max-w-[28rem] my-[1rem] tablet:mt-[4.5rem] z-10 desktop:max-w-[35rem]">
                    <a href="#projects">
                        <Button
                            className="btn btn__light--blue w-[12rem] whitespace-nowrap"
                            text="See my work"
                            icon={faAnglesRight}
                        />
                    </a>{" "}
                    <a href="#contact">
                        <Button
                            className="btn btn__light--black hover:bg-black w-[12rem] whitespace-nowrap"
                            text="Hire Me"
                            icon={faAnglesRight}
                        />
                    </a>
                </div>
            </div>
            <div className="hero__image w-5/6 tablet:w-1/2 h-2/3 relative min-w-[33.7rem]">
                <Image
                    src={
                        theme == "dark"
                            ? "/assets/hero/heroImage2Light.png"
                            : "/assets/hero/heroImage2.png"
                    }
                    alt="image of Charles Miller"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
                <ProjectCarousel projects={props.projects} />
            </div>
        </section>
    );
};
