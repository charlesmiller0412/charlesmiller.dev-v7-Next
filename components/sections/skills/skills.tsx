import { Headings } from "../../headings";
import { SkillsCard } from "./components/skillsCard";
import {
    faPen,
    faLayerGroup,
    faCode,
    faWheelchair,
    faServer,
    faFolderTree,
} from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Headings
                className="w-full flex flex-col items-end mb-5 tablet:mb-[5rem]"
                h2="Skills"
                h5="My Specialties"
                h5className="headings__right--h5 text-sm"
                h2className="headings--h2 text-lg tablet:text-xl"
            />
            <div className="skills__container grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-20 place-items-center max-w-[120rem] m-auto">
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    <SkillsCard
                        className="w-1/5"
                        icon={faPen}
                        title="UX/UI Design"
                        text="I create unique user experiences through skillfully created user interface design that stands out among other websites and applications."
                    />
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    {" "}
                    <SkillsCard
                        icon={faLayerGroup}
                        title="Front-end Development"
                        text="This is my true enjoyment in web development. From creating reusable components to customizing MaterialUI & Bootstrap. If It’s CSS and TypeScript/JavaScript, then it’s something I enjoy."
                    />
                </AnimationOnScroll>{" "}
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    <SkillsCard
                        icon={faServer}
                        title="Back-end Development"
                        text="While I prefer the front-end cycle of development, I also have to implement database and API data so I make sure to keep up with the latest tech such as MongoDB and Express."
                    />
                </AnimationOnScroll>{" "}
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    <SkillsCard
                        icon={faAccessibleIcon}
                        title="Accessibility"
                        text="ADA issues can really hinder your web analytics as well as the user-experience for those with disabilites. From simple things like contrast to screenreaders and animation preferences. These are things often overlooked and shouldn’t be."
                    />
                </AnimationOnScroll>{" "}
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    <SkillsCard
                        icon={faCode}
                        title="Clean & Commented Code"
                        text="Maintainable code is a must have. I know I won’t be the only developer working on your project, so proper comments and easily understood variables are key to making sure your project lasts as long as you want it to."
                    />
                </AnimationOnScroll>{" "}
                <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                >
                    <SkillsCard
                        icon={faFolderTree}
                        title="Search Engine Optimization"
                        text="What’s the point of having a website if no one can find it? I use my research skills to determine the best tags and meta data to store in your files and put you at the top of the search results page."
                    />
                </AnimationOnScroll>
            </div>
        </section>
    );
};
