import images from "../../../../public/assets/Images";
import Image from "next/image";
export const AboutSkills = () => {
    return (
        <div className="aboutSkills flex flex-col justify-between h-2/5">
            <div className="experience">
                <div className="row flex w-full justify-center gap-3">
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="HTML"
                    >
                        <Image
                            src={images.icons.html}
                            alt="HTML"
                            layout="fill"
                            objectFit="contain"
                        />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="CSS"
                    >
                        <Image src={images.icons.css} alt="CSS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="JavaScript"
                    >
                        <Image src={images.icons.javascript} alt="JavaScript" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="TypeScript"
                    >
                        <Image src={images.icons.typescript} alt="TypeScript" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="MongoDB"
                    >
                        <Image src={images.icons.mongoDB} alt="MongoDB" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="React.JS"
                    >
                        <Image src={images.icons.reactIcon} alt="React.JS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Next.JS"
                    >
                        <Image src={images.icons.next} alt="Next.JS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Express.JS"
                    >
                        <Image src={images.icons.expressJS} alt="Express.JS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Node.JS"
                    >
                        <Image src={images.icons.nodeJS} alt="Node.JS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="jQuery"
                    >
                        <Image src={images.icons.jquery} alt="jQuery" />
                    </span>
                </div>
                <div className="row flex w-full justify-center gap-3 mt-3">
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Sass"
                    >
                        <Image src={images.icons.sass} alt="Sass" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Bootstrap"
                    >
                        <Image src={images.icons.bootstrap} alt="Bootstrap" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="TailwindCSS"
                    >
                        <Image src={images.icons.tailwind} alt="TailwindCSS" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Git"
                    >
                        <Image src={images.icons.git} alt="Git" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="PHP"
                    >
                        <Image src={images.icons.php} alt="PHP" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Python"
                    >
                        <Image src={images.icons.python} alt="Python" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Java"
                    >
                        <Image src={images.icons.java} alt="Java" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="JSON"
                    >
                        <Image src={images.icons.jsonIcon} alt="JSON" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Bash"
                    >
                        <Image src={images.icons.bash} alt="Bash" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Markdown"
                    >
                        <Image src={images.icons.markdown} alt="Markdown" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Rest API"
                    >
                        <Image src={images.icons.restAPI} alt="Rest API" />
                    </span>
                </div>
            </div>
            <div className="tools">
                <div className="row flex w-full justify-center gap-3">
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="VS Code"
                    >
                        <Image
                            src={images.icons.vsCode}
                            alt="Visual Studio Code"
                        />
                    </span>
                    <span
                        className="tooltip tooltip__tall w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Node Package Manager (NPM)"
                    >
                        <Image
                            src={images.icons.npmIcon}
                            alt="Node Package Manager (NPM)"
                        />
                    </span>
                    <span
                        className="tooltip tooltip__tall w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Block Element Modifier"
                    >
                        <Image src={images.icons.bem} alt="BEM" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Github"
                    >
                        <Image src={images.icons.github} alt="Github" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Wordpress"
                    >
                        <Image src={images.icons.wordpress} alt="Wordpress" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Amazon Web Services"
                    >
                        <Image
                            src={images.icons.aws}
                            alt="Amazon Web Services"
                        />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Google"
                    >
                        <Image src={images.icons.google} alt="Google" />
                    </span>
                </div>
                <div className="row flex w-full justify-center gap-3 mt-3">
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Vercel"
                    >
                        <Image src={images.icons.vercel} alt="Vercel" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Figma"
                    >
                        <Image src={images.icons.figma} alt="Figma" />
                    </span>

                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Photoshop"
                    >
                        <Image src={images.icons.photoshop} alt="Photoshop" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Illustrator"
                    >
                        <Image
                            src={images.icons.illustrator}
                            alt="Illustrator"
                        />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="XD"
                    >
                        <Image src={images.icons.xd} alt="XD" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="After Effects"
                    >
                        <Image
                            src={images.icons.afterEffects}
                            alt="After Effects"
                        />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Premier Pro"
                    >
                        <Image src={images.icons.premier} alt="Premier Pro" />
                    </span>
                    <span
                        className="tooltip w-[2rem] h-[2rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]"
                        data-tooltip="Stack Overflow &#128514;"
                    >
                        <Image
                            src={images.icons.stackOverflow}
                            alt="Stack Overflow"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};
