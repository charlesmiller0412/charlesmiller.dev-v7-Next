import { useState, useEffect } from "react";
import Head from "next/head";
import { About } from "./sections/about/about";
import { Hero } from "./sections/hero/hero";
import { MobileNav } from "./sections/navbar/mobileNav/mobileNav";
import { Navbar } from "./sections/navbar/navbar";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { Contact } from "./sections/contact/contact";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const date = new Date();
    let year: any = date.getFullYear();

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerportfolioprojects.herokuapp.com/api/projects"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err: any) {
            setError(true);
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Charles Miller" />
                <meta
                    name="description"
                    content="Digital Portfolio for Charles Miller - Web Developer & UX/UI Designer"
                />
                <meta property="og:image" content="/assets/favicon/logo.png" />
                <meta
                    property="og:description"
                    content="Digital Portfolio for Charles Miller - Web Developer & UX/UI Designer"
                />
                <meta
                    property="og:title"
                    content="Charles Miller | Web Developer & UX/UI Designer"
                />
                <title>Charles Miller | Web Developer & UX/UI Designer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white dark:bg-black transition-all overflow-x-hidden">
                <Navbar />
                <MobileNav />
                <Hero projects={projects} />
                <Projects projects={projects} error={error} loading={loading} />
                <Skills />
                <About />
                <Contact />
            </main>

            <footer className="bg-black dark:bg-white h-[3vh] text-white dark:text-black text-xs flex justify-center items-center">
                {year} Copyright &copy; Charles Miller. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
