import Head from "next/head";
import { Hero } from "./sections/hero/hero";
import { MobileNav } from "./sections/navbar/mobileNav/mobileNav";
import { Navbar } from "./sections/navbar/navbar";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";

const Home = () => {
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
                <Hero />
                <Projects />
                <Skills />
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
