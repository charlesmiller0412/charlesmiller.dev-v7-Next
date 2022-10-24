import { AboutCard } from "./components/aboutCard";
import { GitCommits } from "./components/gitCommits";
import { GithubLanguages } from "./components/githubLanguages";
import { GithubStats } from "./components/githubStats";

export const About = () => {
    return (
        <div className="about w-full h-screen flex justify-evenly flex-col tablet:flex-row px-10 tablet:px-0">
            <div className="about__left w-3/6"></div>
            <div className="about__right w-full tablet:w-2/6 h-full flex flex-col gap-8 items-center justify-center">
                <GitCommits />
                <GithubLanguages />
            </div>
        </div>
    );
};
