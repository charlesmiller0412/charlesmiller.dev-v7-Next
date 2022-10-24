import Image from "next/image";

export const GithubLanguages = () => {
    return (
        <div className="githubData w-[38rem] h-1/4 text-black bg-white text-center rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.05)] border-[.02rem] border-[rgba(65,65,65,.5)] flex flex-col justify-between py-[1.2rem] relative">
            <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=charlesmiller0412&langs_count=10&layout=compact&&bg_color=f1f1f1&border_color=f1f1f1&text_color=384b52&title_color=12252b"
                alt="GitHub Data"
                layout="fill"
                objectFit="contain"
                priority
            />
        </div>
    );
};
