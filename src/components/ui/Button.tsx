import { ReactElement } from "react";

type VariantButtonType = "primary" | "secondary";
type VariantSizeType = "sm" | "md" | "lg";

interface ButtonPropsInterface {
    variant: VariantButtonType,
    size: VariantSizeType,
    content: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
    loading?: boolean
}

const variantButtonStyle = {
    'primary' : "bg-primaryblue text-primarywhite",
    'secondary': "bg-secondaryblue text-primaryblue"
}

const sizeStyle = {
    'sm' : 'px-2 py-1 text-sm rounded-sm',
    'md' : 'px-4 py-2 text-md rounded-md',
    'lg' : 'px-8 py-4 text-lg rounded-lg'
}

const defaultStyles = "font-light";

export function Button(props : ButtonPropsInterface) {
    return <button onClick={ props.onClick } className={`${variantButtonStyle[props.variant]} ${sizeStyle[props.size]} ${defaultStyles} ${ props.loading ? 'disabled' : '' }`}>
        <div className={"flex justify-center items-center"}>
            {props.startIcon}
            <div className="px-2">
                {props.content}
            </div>
            {props.endIcon}
        </div>
    </button>
};