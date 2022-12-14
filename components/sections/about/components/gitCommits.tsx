import { Octokit } from "octokit";
import { useEffect, useState } from "react";

export const GitCommits = () => {
    const [data, setData] = useState<any>([]);

    const getData = async () => {
        let list = [];

        const octokit = new Octokit({
            auth: process.env.NEXT_PUBLIC_GHP_TOKEN,
        });
        let res: any = await octokit.request(
            "GET /users/{username}/events/public",
            {
                username: "charlesmiller0412",
            }
        );

        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].type == "PushEvent") {
                if (list.length < 5) {
                    list.push(res.data[i]);
                }
            }
        }
        setData(list);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="gitCommits w-full h-fit text-black bg-white text-center rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.05)] border-[.02rem] border-[rgba(65,65,65,.5)] flex flex-col justify-between py-[1.2rem] whitespace-nowrap overflow-hidden">
            <h3 className="gitCommits__title font-light text-sm tracking-[.75rem] leading-lg uppercase text-offBlack">
                recent git commits
            </h3>
            {data.map((item: any) => (
                <div
                    key={item.id}
                    className="w-full flex justify-between px-12"
                >
                    <span className="font-bold text-left w-[9.5rem]">
                        <a
                            href={"https://github.com/" + item.repo.name}
                            target="__blank"
                            className="hover:text-blue"
                        >
                            {item.repo.name.split("/").pop()}
                        </a>
                    </span>
                    <span className="font-regular whitespace-nowrap px-5 overflow-hidden">
                        {item.payload.commits[0].message}
                    </span>
                    <span className="font-semiBold text-right pl-3">
                        {item.created_at.substring(5, 10)}
                    </span>
                </div>
            ))}
        </div>
    );
};
