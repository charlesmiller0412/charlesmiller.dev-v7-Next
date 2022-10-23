import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = (props: any) => {
    return (
        <button className={props.className}>
            {props.text}
            <FontAwesomeIcon icon={props.icon} className="ml-[.5rem] text-sm" />
        </button>
    );
};
