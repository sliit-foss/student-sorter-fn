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
            className={`${padding} ${width} ${radius} text-indigo-50 bg-indigo-800 hover:bg-indigo-900 outline-none rounded-md`}
            type={type}>
            {value}
        </button>
    )
}

export default Button;