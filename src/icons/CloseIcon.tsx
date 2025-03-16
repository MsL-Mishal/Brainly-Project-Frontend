import { IconPropsInterface, sizeVariants } from ".";

export function CloseIcon(props: IconPropsInterface) {
    return <div className="hover:cursor-pointer hover:bg-gray-200 rounded-md p-2">
        <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${sizeVariants[props.size]} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </div>
}   