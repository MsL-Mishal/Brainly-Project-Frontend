type iconSizeType = 'sm' | 'md' | 'lg';
type iconColorType = 'primary' | 'secondary';

export interface IconPropsInterface {
    size: iconSizeType,
    color?: iconColorType,
    onClick?: () => void
}

export const sizeVariants = {
    'sm': 'size-4',
    'md': 'size-6',
    'lg': 'size-8'
}