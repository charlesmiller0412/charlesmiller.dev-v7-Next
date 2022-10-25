import { Button } from "../../../button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const ProjectCard = (props: any) => {
    return (
        <div className="card h-[26rem] w-[37rem] bg-offWhite rounded-[.4rem] flex flex-col overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,.25)] dark:shadow-[0_4px_4px_0_rgba(255,255,255,.25)] relative">
            <div className="card__image w-full h-full relative">
                <Image
                    src={props.project.imgurl}
                    alt={props.project.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="card__links w-full flex justify-evenly self-end">
                <a href={props.project.siteurl} target="__blank">
                    <Button
                        className="cardBtn cardBtn__light"
                        text="See the site"
                        icon={faAnglesRight}
                    />
                </a>
                <a href={props.project.codeurl} target="__blank">
                    <Button
                        className="cardBtn cardBtn__dark"
                        text="See the code"
                        icon={faAnglesRight}
                    />
                </a>
            </div>
            <div className="card__overlay absolute top-0 left-0 w-full h-5/6 bg-gradient-to-r from-cardBG to-cardBG z-10 flex justify-evenly flex-col px-5 opacity-0 active:opacity-100 hover:opacity-100 hover:cursor-crosshair transition-all">
                <h4 className="text-base text-blue font-semiBold leading-base">
                    {props.project.title}
                </h4>
                <p className="font-medium text-xs leading-sm text-white tracking-wide">
                    {props.project.description}
                </p>
                <ul className="px-3 grid grid-cols-3 gap-3 text-center">
                    {props.project.languages.map((language: any) => (
                        <li
                            key={language}
                            className="bg-blue rounded-xl py-1 text-offBlack"
                        >
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
