import { useEffect, useState } from "react";
import { Button } from "../../../components/button";
import { Headings } from "../../../components/headings";
import { ProjectCard } from "./components/projectCard";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const Projects = (props: any) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerportfolioprojects.herokuapp.com/api/projects"
            );
            const json = await response.json();
            setProjects(json);
            return;
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);
    return (
        <section className="projects" id="projects">
            <div className="projects__heading flex justify-between items-center mb-5 tablet:mb-[5rem]">
                <Headings
                    h5className="headings__left--h5 text-sm"
                    h2className="headings--h2 text-lg tablet:text-xl"
                    h5="My work"
                    h2="Featured Projects"
                />
                <Button
                    className="hidden tablet:flex btn btn__light--blue tablet:whitespace-nowrap w-fit px-20 h-fit"
                    text="View all projects in my database"
                    icon={faAnglesRight}
                />
            </div>
            <div className="projects__container grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-14 place-items-center max-w-[120rem] m-auto">
                {projects.map((project: any) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
                <Button
                    className="flex tablet:hidden btn btn__light--blue tablet:whitespace-nowrap w-fit px-20 h-fit"
                    text="View all projects in my database"
                    icon={faAnglesRight}
                />
            </div>
        </section>
    );
};
