import { useState } from "react";
import { Headings } from "../../headings";
import { GitCommits } from "./components/gitCommits";
import { GithubLanguages } from "./components/githubLanguages";
import { ExperienceCard } from "./components/experienceCard";
import { AboutText } from "./components/aboutText";
import { AboutSkills } from "./components/aboutSkills";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = () => {
    const [activeAbout, setActiveAbout] = useState("Education");

    return (
        <section className="about w-full h-auto" id="about">
            <Headings
                h5className="headings__left--h5 text-sm"
                h2className="headings--h2 text-lg tablet:text-xl"
                h5="My Life"
                h2="About Me"
            />
            <div className="about__container w-full h-5/6 flex justify-between flex-col tablet:flex-row tablet:mt-[5rem] max-w-[120rem] m-auto mt-5">
                <div className="about__left w-full tablet:w-1/2 h-3/5 tablet:h-5/6 flex items-center tablet:items-start justify-between flex-col gap-5">
                    <AboutText />
                    <AboutSkills />
                </div>
                <AnimationOnScroll
                    animateIn="animate__slideInRight"
                    animateOut="animate__slideOutRight"
                >
                    <div className="about__right w-full pt-5 tablet:mt-0 h-1/2 tablet:w-fit tablet:h-full grid grid-cols-1 grid-rows-3">
                        <ExperienceCard />
                        <GitCommits />
                        <GithubLanguages />
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
};
