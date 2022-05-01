interface ButtonProps {
    value: string,
    onClick?: () => void,
    width?: string,
    padding?: string,
    radius?: string,
    type?: 'button' | 'submit' | 'reset',
}

const Button = ({
    value,
    onClick,
    width,
    padding,
    radius,
    type,
}: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={`${padding} ${width} ${radius} text-indigo-50 bg-primary-base hover:bg-primary-hover outline-none rounded-md transition duration-200 shadow-sm`}
            type={type}>
            {value}
        </button>
    )
}

export default Button;