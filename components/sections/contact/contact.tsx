import { useRef } from "react";
import { Headings } from "../../headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "../hero/components/social";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form } from "./components/form";

export const Contact = () => {
    const form = useRef();

    const handleFormSubmit = (e: any) => {
        const SERVICE_ID = "service_vbemywk";
        const TEMPLATE_ID = "template_i0d498p";
        const USER_ID = "dMWjLU5PXNQ0ufq1N";

        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };

    return (
        <section
            className="contact w-full bg-offWhite dark:bg-offBlack"
            id="contact"
        >
            <Headings
                h5className="headings__right--h5 text-end text-sm"
                h2className="headings--h2 text-lg text-end tablet:text-xl"
                h5="hire me"
                h2="Contact"
            />
            <div className="contact__container w-full flex justify-between max-w-[120rem] m-auto flex-col tablet:flex-row tablet:mt-[5rem]">
                <div className="contact__container--left w-full tablet:w-1/3 justify-evenly h-full grid grid-cols-2 tablet:gap-x-20">
                    <div className="contact__container--left-location items-start flex w-full tablet:items-center tablet:w-full flex-col tablet:flex-row">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-lg w-20"
                        />
                        <div className="text-xs desktop:text-sm border-t tablet:border-l tablet:border-t-0 border-offBlack dark:border-offWhite p-5 desktop:p-10 mt-4 tablet:mt-10 tablet:ml-10 whitespace-nowrap">
                            <span className="uppercase font-bold text-base block">
                                Location:
                            </span>
                            Pensacola, FL USA
                        </div>
                    </div>
                    <div className="contact__container--left-email items-end flex w-full tablet:items-center tablet:w-full flex-col tablet:flex-row">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-lg w-20"
                        />
                        <div className="text-xs desktop:text-sm border-t tablet:border-l tablet:border-t-0 border-offBlack dark:border-offWhite p-5 desktop:p-10 mt-4 tablet:mt-10 tablet:ml-10 whitespace-nowrap">
                            <span className="uppercase font-bold text-base block">
                                Email:
                            </span>
                            charles@charlesmiller.dev
                        </div>
                    </div>
                    <SocialLinks className="socialLinks text-icons w-1/2 m-auto col-span-2 flex justify-between mb-8 tablet:my-12 max-w-[25rem]" />
                </div>
                <div className="contact__container--right w-full tablet:w-1/2 items-end">
                    <Form handleFormSubmit={handleFormSubmit} form={form} />
                </div>
            </div>
        </section>
    );
};
